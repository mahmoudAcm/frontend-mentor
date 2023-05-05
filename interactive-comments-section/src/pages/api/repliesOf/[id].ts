// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllRepliesOf, getReplies, getRepliesParent } from '@/src/pages/api/controllers/commentsOrReplies';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const parentComment = req.query.id as string;
  const replies = getReplies(parentComment);
  res.status(200).json({
    repliesOf: getAllRepliesOf({ [parentComment]: replies }, replies, 1),
    repliesParent: getRepliesParent(parentComment)
  });
}
