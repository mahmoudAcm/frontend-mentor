import { NextApiRequest, NextApiResponse } from 'next';
import { getUsers } from '../../../server/controllers/users';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getUsers(req, res);
    default:
      res.status(501).json({ message: 'Method not implemented' });
  }
}
