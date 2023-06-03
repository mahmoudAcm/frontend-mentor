import prisma from '../../prisma/client';
import getMentions from '../libs/getMentions';
import { NextApiRequest } from 'next';
import { createNotifications } from './notifications';
import { Notification } from '@/src/types';

type Payload =
  | {
      commentId: string;
    }
  | {
      replyId: string;
    };

type Meta = {
  userId: string;
};

export async function createMentions(req: NextApiRequest, payload: Payload, meta: Meta) {
  await prisma.mention.createMany({
    data: getMentions(req.body.content).map(username => ({
      username: username.slice(1),
      ...payload
    }))
  });

  const mentions = await prisma.mention.findMany({
    where: {
      ...payload,
      user: {
        NOT: {
          image: null
        }
      }
    },
    select: {
      user: {
        select: {
          id: true,
          username: true,
          image: true,
          email: true
        }
      }
    }
  });

  const distinct = new Set<string>();
  const __mentions: typeof mentions = [];
  for (const mention of mentions) {
    if (!distinct.has(mention.user?.email!)) {
      distinct.add(mention.user?.email!);
      __mentions.push(mention);
    }
  }

  const notifications: Notification[] = [];
  for (const mention of __mentions) {
    const notification = (await createNotifications({
      ...payload,
      ...meta,
      action: 'mention',
      type: (payload as any).commentId ? 'comment' : 'reply',
      targetId: [(payload as any).commentId, (payload as any).repayId].filter(Boolean).join(''),
      targetOwnerId: mention.user!.id
    })) as unknown as Notification;

    notifications.push({
      ...notification,
      content: [notification.comment?.content, notification.reply?.content].filter(Boolean).join('')
    });
  }

  return {
    mentions: __mentions,
    notifications
  };
}

export async function editMentions(req: NextApiRequest, payload: Payload, meta: Meta) {
  await prisma.mention.deleteMany({
    where: payload
  });

  return createMentions(req, payload, meta);
}
