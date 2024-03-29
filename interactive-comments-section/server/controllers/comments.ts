import { NextApiRequest, NextApiResponse } from 'next';
import prisma, { commentSchema } from '../../prisma/client';
import { isAuthenticated } from '../middleares/user';
import { ValidationError } from 'yup';
import { deleteReplyAndChildren } from './replies';
import logger from '@/src/pages/api/logger';
import { HTTPNotAuthorizedError, HTTPNotFoundError } from '../libs/custom-errors';
import { Prisma } from '.prisma/client';
import PrismaClientKnownRequestError = Prisma.PrismaClientKnownRequestError;
import { createMentions, editMentions } from '../middleares/mentions';
import { createNotifications } from '../middleares/notifications';

export async function getComments(req: NextApiRequest, res: NextApiResponse) {
  try {
    const user = await isAuthenticated(req, res);

    const includeUserAndVotes = {
      user: {
        select: {
          username: true,
          image: true
        }
      },
      votes: {
        where: {
          userId: user.id
        }
      },
      mentions: {
        where: {
          user: {
            NOT: {
              image: null
            }
          }
        },
        select: {
          user: {
            select: {
              username: true,
              image: true,
              email: true
            }
          }
        }
      }
    } as const;

    const comments = await prisma.comment.findMany({
      include: {
        ...includeUserAndVotes,
        replies: {
          include: {
            ...includeUserAndVotes,
            replies: {
              include: {
                ...includeUserAndVotes,
                replies: {
                  include: {
                    ...includeUserAndVotes,
                    replies: {
                      include: {
                        ...includeUserAndVotes,
                        replies: {
                          take: 1,
                          select: {
                            id: true
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
      }
    });

    res.json(comments);
  } catch (error: any) {
    logger.error(error);
    if (error instanceof HTTPNotAuthorizedError) return res.status(401).json({ message: 'You need to log in' });
    res.status(400).json({ message: error.message });
  }
}

export async function createComment(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body;

  try {
    //validate the comment
    await commentSchema.validate(data);

    const user = await isAuthenticated(req, res);

    const comment = await prisma.comment.create({
      data: {
        ...data,
        userId: user.id
      },
      include: {
        user: {
          select: {
            username: true,
            image: true
          }
        },
        votes: true
      }
    });

    const result = await createMentions(
      req,
      {
        commentId: comment.id
      },
      {
        userId: user.id
      }
    );

    res.status(201).json({ ...comment, ...result });
  } catch (error: any) {
    logger.error(error);
    if (error instanceof ValidationError)
      return res.status(400).json({ message: 'Please make sure you sent the correct data' });

    if (error instanceof HTTPNotAuthorizedError) return res.status(401).json({ message: 'You need to log in' });

    res.status(400).json({ message: error.message });
  }
}

export async function deleteComment(req: NextApiRequest, res: NextApiResponse) {
  const commentId = req.query.id as string;
  try {
    const user = await isAuthenticated(req, res);
    const comment = await prisma.comment.findFirst({
      where: {
        id: commentId
      },
      select: {
        userId: true,
        replies: {
          select: {
            id: true
          }
        }
      }
    });

    if (!comment) throw new HTTPNotFoundError('Comment was not found');

    if (user.id !== comment!.userId) throw new HTTPNotAuthorizedError('You are not authorized to delete this comment');

    for (const { id } of comment.replies) {
      await deleteReplyAndChildren(id);
    }

    await prisma.comment.delete({ where: { id: commentId } });

    res.json({ message: 'Comment deleted successfully' });
  } catch (error: any) {
    logger.error(error);
    if (error instanceof HTTPNotAuthorizedError) return res.status(401).json(error.getError());

    if (error instanceof HTTPNotFoundError) return res.status(404).json(error.getError());

    res.status(400).json({ message: error.message });
  }
}

export async function editComment(req: NextApiRequest, res: NextApiResponse) {
  try {
    const content = req.body.content;
    const id = req.query.id as string;

    const user = await isAuthenticated(req, res);

    const comment = await prisma.comment.update({
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

    if (comment.userId !== user.id) throw new HTTPNotAuthorizedError('You are not authorized to update this comment');

    const result = await editMentions(
      req,
      {
        commentId: id
      },
      {
        userId: user.id
      }
    );

    res.json({ message: 'Your comment has been updated', ...result });
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
        commentId: id,
        amount
      },
      select: {
        id: true,
        comment: {
          select: {
            score: true,
            userId: true
          }
        }
      }
    });

    if (vote && !vote.comment) throw new HTTPNotFoundError('The comment was not found');

    if (vote.comment!.userId === user.id) {
      await prisma.vote.delete({ where: { id: vote.id } });
      throw new Error("You can't vote for yourself");
    }

    const comment = await prisma.comment.update({
      where: { id },
      select: {
        content: true,
        userId: true
      },
      data: {
        score: vote.comment!.score + amount
      }
    });

    const notification = await createNotifications({
      targetId: id,
      targetOwnerId: comment.userId,
      userId: user.id,
      commentId: id,
      action: 'vote',
      type: 'comment'
    });

    res.json({
      message: `You ${amount === -1 ? 'down voted' : 'up voted'} the comment`,
      notification: {
        ...notification,
        content: [notification.comment?.content, notification.reply?.content].filter(Boolean).join('')
      }
    });
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
