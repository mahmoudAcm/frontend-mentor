import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../prisma/client';
import { isAuthenticated } from '../middleares/user';
import logger from '@/src/pages/api/logger';
import { HTTPNotAuthorizedError } from '../libs/custom-errors';

export async function getUsers(req: NextApiRequest, res: NextApiResponse) {
  try {
    await isAuthenticated(req, res);
    const limit = parseInt(req.query.limit as string);
    const username = (req.query.username as string) ?? '';
    const meta: { take: number } | {} = !isNaN(limit) ? { take: limit } : {};

    res.json(
      await prisma.user.findMany({
        where: {
          username: {
            startsWith: username
          }
        },
        select: {
          username: true,
          image: true,
          email: true
        },
        ...meta
      })
    );
  } catch (error: any) {
    logger.error(error);
    if (error instanceof HTTPNotAuthorizedError) return res.status(401).json(error.getError());
    res.status(400).json({ message: error.message });
  }
}
