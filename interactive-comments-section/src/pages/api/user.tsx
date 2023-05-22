import { NextApiRequest, NextApiResponse } from 'next';
import { getUserInfo } from '@/src/pages/api/controllers/user';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getUserInfo(req, res);
    default:
      res.status(501).json({ message: 'Method not implemented' });
  }
}
