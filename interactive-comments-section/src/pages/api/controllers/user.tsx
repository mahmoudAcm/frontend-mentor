import { NextApiRequest, NextApiResponse } from 'next';
import { isAuthenticated } from '@/src/pages/api/middleares/user';
import logger from '@/src/pages/api/logger';

export async function getUserInfo(req: NextApiRequest, res: NextApiResponse) {
  try {
    const user = await isAuthenticated(req, res);
    res.json({ user });
  } catch (error) {
    logger.error(error);
    res.status(401).json({ message: 'You need to log in' });
  }
}
