import { NextApiRequest, NextApiResponse } from 'next';
import prisma, { replySchema } from '../../../../prisma/client';
import { isAuthenticated } from '@/src/pages/api/middleares/user';
import logger from '@/src/pages/api/logger';
import { Prisma } from '.prisma/client';
import PrismaClientKnownRequestError = Prisma.PrismaClientKnownRequestError;
import { HTTPNotAuthorizedError, HTTPNotFoundError } from '@/src/pages/api/libs/custom-errors';

export async function createReply(req: NextApiRequest, res: NextApiResponse) {
  try {
    await replySchema.validate(req.body);

    const user = await isAuthenticated(req, res);

    //check if the parent is found
    if (req.body.parentReplyId) {
      await prisma.reply.findFirstOrThrow({ where: { id: req.body.parentReplyId } });
    } else if (req.body.parentCommentId) {
      await prisma.comment.findFirstOrThrow({ where: { id: req.body.parentCommentId } });
    }

    const reply = await prisma.reply.create({
      data: {
        ...req.body,
        userId: user.id
      },
      include: {
        parentReply: {
          select: {
            parentReply: {
              select: {
                id: true
              }
            },
            parentComment: {
              select: {
                id: true
              }
            }
          }
        },
        user: {
          select: {
            username: true,
            image: true
          }
        },
        votes: true
      }
    });

    const { parentReply, ...rest } = reply;

    let parentOfParentId = '';
    if (parentReply?.parentReply) parentOfParentId = parentReply?.parentReply.id;
    if (parentReply?.parentComment) parentOfParentId = parentReply?.parentComment.id;

    res.status(201).json({ ...rest, parentOfParentId });
  } catch (error: any) {
    logger.error(error);
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === 'P2025') return res.status(404).json({ message: error.message + ' please reload the page' });
      else return res.status(400).json({ code: error.code });
    }
    res.status(400).json({ message: error.message });
  }
}

export async function getRepliesOf(req: NextApiRequest, res: NextApiResponse) {
  const userSelect = {
    username: true,
    image: true
  } as const;

  try {
    const parentReplyId = req.query.id as string;

    const user = await isAuthenticated(req, res);

    const reply = await prisma.reply.findFirst({
      where: {
        id: parentReplyId
      },
      include: {
        user: {
          select: userSelect
        },
        votes: {
          where: {
            userId: user.id
          }
        },
        replies: {
          include: {
            user: {
              select: userSelect
            },
            votes: {
              where: {
                userId: user.id
              }
            },
            replies: {
              include: {
                user: {
                  select: userSelect
                },
                votes: {
                  where: {
                    userId: user.id
                  }
                },
                replies: {
                  include: {
                    user: {
                      select: userSelect
                    },
                    votes: {
                      where: {
                        userId: user.id
                      }
                    },
                    replies: {
                      include: {
                        user: {
                          select: userSelect
                        },
                        votes: {
                          where: {
                            userId: user.id
                          }
                        },
                        replies: {
                          take: 1,
                          select: { id: true }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    })!;

    if (!reply) throw new HTTPNotFoundError('No such reply was found');

    res.json(reply);
  } catch (error: any) {
    logger.error(error);
    if (error instanceof HTTPNotAuthorizedError) return res.status(401).json(error.getError());
    if (error instanceof HTTPNotFoundError) return res.status(404).json(error.getError());
    res.status(400).json({ message: error.message });
  }
}

export const deleteReplyAndChildren = async (replyId: string) => {
  // Retrieve the reply and its children (replies of replies)
  const reply = await prisma.reply.findUnique({
    where: { id: replyId },
    include: {
      replies: {
        select: { id: true }
      }
    }
  });

  // Recursively delete the children replies
  if (reply?.replies)
    for (const childReply of reply.replies) {
      await deleteReplyAndChildren(childReply.id);
    }

  // Delete the reply itself
  await prisma.reply.delete({ where: { id: replyId } });
};

export async function deleteReply(req: NextApiRequest, res: NextApiResponse) {
  const replyId = req.query.id as string;
  try {
    const user = await isAuthenticated(req, res);
    const reply = await prisma.reply.findFirst({
      where: {
        id: replyId
      },
      select: {
        userId: true
      }
    });

    if (!reply) return res.status(404).json({ message: 'Replay was not found' });

    if (user.id !== reply!.userId) throw new HTTPNotAuthorizedError('You are not authorized to delete this reply');

    await deleteReplyAndChildren(replyId);
    res.json({ message: 'Reply deleted successfully' });
  } catch (error: any) {
    logger.error(error);
    if (error instanceof HTTPNotAuthorizedError) return res.status(401).json(error.getError());
    res.status(400).json({ message: error.message });
  }
}

export async function editReply(req: NextApiRequest, res: NextApiResponse) {
  try {
    const content = req.body.content;
    const id = req.query.id as string;

    const user = await isAuthenticated(req, res);

    const reply = await prisma.reply.update({
      where: {
        id
      },
      data: {
        content
      },
      select: {
        userId: true
      }
    });

    if (reply.userId !== user.id) throw new HTTPNotAuthorizedError('You are not authorized to update this reply');

    res.json({ message: 'Your reply has been updated' });
  } catch (error: any) {
    logger.error(error);
    if (error instanceof HTTPNotAuthorizedError) return res.status(401).json(error.getError());
    res.status(400).json({ message: error.message });
  }
}

export async function vote(req: NextApiRequest, res: NextApiResponse) {
  try {
    const amount = req.body.amount;
    const id = req.query.id as string;

    if (amount !== -1 && amount !== 1) throw new Error('The amount should be either - 1 or + 1');

    const user = await isAuthenticated(req, res);

    const vote = await prisma.vote.create({
      data: {
        userId: user.id,
        replyId: id,
        amount
      },
      select: {
        id: true,
        reply: {
          select: {
            score: true,
            userId: true
          }
        }
      }
    });

    if (vote && !vote.reply) throw new HTTPNotFoundError('The comment was not found');

    if (vote.reply!.userId === user.id) {
      await prisma.vote.delete({ where: { id: vote.id } });
      throw new Error("You can't vote for yourself");
    }

    await prisma.reply.update({
      where: { id },
      data: {
        score: vote.reply!.score + amount
      }
    });

    res.json({ message: `You ${amount === -1 ? 'down voted' : 'up voted'} the reply` });
  } catch (error: any) {
    logger.error(error);
    if (error instanceof HTTPNotAuthorizedError) return res.status(401).json(error.getError());
    if (error instanceof HTTPNotFoundError) return res.status(404).json(error.getError());
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === 'P2002') return res.status(400).json({ message: "You can't vote twice" });
    }
    res.status(400).json({ message: error.message });
  }
}
