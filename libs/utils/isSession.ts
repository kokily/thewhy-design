import type { NextApiRequest } from 'next';
import { getSession } from 'next-auth/react';

export default async function isSession(req: NextApiRequest) {
  try {
    const session = await getSession({ req });

    if (!session) {
      return false;
    } else {
      return true;
    }
  } catch (err: any) {
    throw new Error(err);
  }
}
