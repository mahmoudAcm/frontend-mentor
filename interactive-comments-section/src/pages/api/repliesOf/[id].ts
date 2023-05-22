// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getRepliesOf } from '@/src/pages/api/controllers/replies';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return getRepliesOf(req, res);
}
