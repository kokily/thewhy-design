import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function useLogged() {
  const { status } = useSession();
  const router = useRouter();

  if (status === 'unauthenticated') {
    router.replace('/thewhy');
  }
}
