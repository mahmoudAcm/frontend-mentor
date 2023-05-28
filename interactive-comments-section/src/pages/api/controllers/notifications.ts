import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../prisma/client';
import { isAuthenticated } from '@/src/pages/api/middleares/user';
import { HTTPNotAuthorizedError } from '@/src/pages/api/libs/custom-errors';
import logger from '@/src/pages/api/logger';

export async function getNotifications(req: NextApiRequest, res: NextApiResponse) {
  try {
    const user = await isAuthenticated(req, res);
    const notifications = await prisma.notification.findMany({
      where: {
        targetOwnerId: user.id
      },
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
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    res.json(
      notifications.map(notification => ({
        ...notification,
        content: [notification.comment?.content, notification.reply?.content].filter(Boolean).join('')
      }))
    );
  } catch (error: any) {
    logger.error(error);
    if (error instanceof HTTPNotAuthorizedError) return res.status(401).json(error.getError());
    res.status(400).json({ message: error.message });
  }
}

export async function markAllAsSeen(req: NextApiRequest, res: NextApiResponse) {
  try {
    const user = await isAuthenticated(req, res);
    await prisma.notification.updateMany({
      where: {
        targetOwnerId: user.id,
        seen: false
      },
      data: {
        seen: true
      }
    });
    res.json({ message: 'all notifications are read' });
  } catch (error: any) {
    logger.error(error);
    if (error instanceof HTTPNotAuthorizedError) return res.status(401).json(error.getError());
    res.status(400).json({ message: error.message });
  }
}
