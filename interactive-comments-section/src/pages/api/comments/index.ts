// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { createComment, deleteComment, editComment, getComments } from '../../../../server/controllers/comments';

const mapMethodToController: Record<string, NextApiHandler> = {
  GET: getComments,
  POST: createComment,
  DELETE: deleteComment,
  PUT: editComment
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (mapMethodToController[req.method!]) {
    const controller = mapMethodToController[req.method!];
    return controller(req, res);
  }
  res.status(501).json({ message: 'Method is not implemented' });
}
