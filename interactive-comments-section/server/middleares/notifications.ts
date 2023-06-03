import prisma from '../../prisma/client';

type Data = {
  targetId: string;
  targetOwnerId: string;
  userId: string;
  action: 'reply' | 'mention' | 'vote';
  type: 'reply' | 'comment';
};

type Payload = (Data & { replyId: string }) | (Data & { commentId: string });

export async function createNotifications(payload: Payload) {
  return prisma.notification.create({
    data: payload,
    include: {
      comment: {
        select: {
          content: true
        }
      },
      reply: {
        select: {
          content: true
        }
      },
      user: {
        select: {
          username: true,
          image: true
        }
      }
    }
  });
}
