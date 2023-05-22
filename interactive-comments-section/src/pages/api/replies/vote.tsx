// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { vote } from '@/src/pages/api/controllers/replies';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PATCH') {
    return vote(req, res);
  } else {
    res.status(501).json({ message: 'Method is not implemented' });
  }
}
