// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getComments } from '@/src/pages/api/controllers/comments';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(getComments());
}
