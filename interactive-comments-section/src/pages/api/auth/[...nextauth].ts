import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { signIn, signUp } from '../../../../server/controllers/auth';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '5mb' // Set desired value here
    }
  }
};

const mapMethodAndPageToController: Record<string, Record<string, NextApiHandler<void>>> = {
  '/signin': {
    POST: signIn
  },
  '/signup': {
    POST: signUp
  }
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const page = '/' + (req.query.nextauth as string[]).join('/');
  if (mapMethodAndPageToController[page]) {
    const controller = mapMethodAndPageToController[page][req.method!];
    if (!controller) return res.status(400).json({ message: 'This method is not supported' });
    return controller(req, res);
  }
  return res.status(404).json({ message: 'Page was not found' });
}
