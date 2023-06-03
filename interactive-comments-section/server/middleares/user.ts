import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import prisma from '../../prisma/client';
import { HTTPNotAuthorizedError } from '../libs/custom-errors';

export const isAuthenticated = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const [, token] = req.headers.authorization?.split('Bearer ')! ?? [];

    const { id } = jwt.verify(token, process.env.SECRET_OR_PRIVATE_KEY!) as { id: string };
    return await prisma.user.findUniqueOrThrow({
      where: {
        id
      },
      select: {
        id: true,
        email: true,
        image: true,
        username: true,
        emailVerified: true
      }
    });
  } catch (error) {
    throw new HTTPNotAuthorizedError('You are not authorized');
  }
};
