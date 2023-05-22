// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { createReply, deleteReply, editReply } from '@/src/pages/api/controllers/replies';

const mapMethodToController: Record<string, NextApiHandler> = {
  POST: createReply,
  DELETE: deleteReply,
  PUT: editReply
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (mapMethodToController[req.method!]) {
    const controller = mapMethodToController[req.method!];
    return controller(req, res);
  }
  res.status(501).json({ message: 'Method is not implemented' });
}
