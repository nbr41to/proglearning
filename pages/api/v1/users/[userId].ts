import type { User } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

import { prismaUserFindUnique } from 'src/libs/backend/prisma/user';

const usersHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<User>
) => {
  const { query, method } = req;
  const uid = query.userId as string;

  switch (method) {
    case 'GET':
      const response = await prismaUserFindUnique(uid);
      if (response) {
        res.status(200).json(response);
      }
      if (!response) {
        res.status(204).end(); // No Content
      }
      break;
    case 'PUT':
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default usersHandler;
