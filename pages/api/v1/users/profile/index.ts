// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { Profile } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from 'src/libs/backend/prisma/client';

const usersHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Profile>
) => {
  const { body, method, headers } = req;
  const bearer = headers.authorization;
  const uid = bearer?.split(' ')[1];

  if (!uid) {
    res.status(401).end('Unauthorized');

    return;
  }

  switch (method) {
    case 'GET':
      const response = await prisma.profile.findUnique({
        where: {
          userId: uid,
        },
      });
      if (response) {
        res.status(200).json(response);
      }
      if (!response) {
        res.status(204).end();
      }
      break;

    case 'PUT':
      const updateRes = await prisma.profile.update({
        where: {
          userId: uid,
        },
        data: {
          ...body,
        },
      });
      if (updateRes) {
        res.status(200).json(updateRes);
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default usersHandler;
