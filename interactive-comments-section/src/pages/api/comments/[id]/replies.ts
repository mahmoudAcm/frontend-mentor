// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getReplies } from '@/src/pages/api/controllers/comments';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const parentComment = req.query.id as string;
  res.status(200).json(getReplies(parentComment));
}
