import type { Sticky } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

import {
  prismaStickyCreate,
  prismaStickyFindMany,
} from 'src/libs/backend/prisma/sticky';

const stickiesHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Sticky | Sticky[]>
) => {
  const { body, method, headers } = req;
  const bearer = headers.authorization;
  const uid = bearer?.split(' ')[1];
  // console.log(uid);

  if (!uid) {
    res.status(401).end('Unauthorized');

    return;
  }

  switch (method) {
    case 'GET':
      const getRes = await prismaStickyFindMany();
      if (getRes) {
        res.status(200).json(getRes);
      }
      break;
    case 'POST':
      const createRes = await prismaStickyCreate(body);
      if (createRes) {
        res.status(200).json(createRes);
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default stickiesHandler;
