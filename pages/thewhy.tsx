import type { SyntheticEvent } from 'react';
import type { NextPage } from 'next';
import { useRef, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Login from '../components/auth/Login';
import PageTemplate from '../components/common/PageTemplate';

const TheWhyPage: NextPage = () => {
  const router = useRouter();
  const { status } = useSession();
  const [formStatus, setFormStatus] = useState('');
  const passwordRef = useRef<HTMLInputElement>(null);

  const onLogin = async (e: SyntheticEvent) => {
    e.preventDefault();

    const password = passwordRef.current?.value;

    const result = await signIn('credentials', {
      redirect: false,
      password,
    });

    if (!result?.error) {
      setFormStatus('로그인 성공!');
      toast.success(formStatus);
      router.replace('/');
    } else {
      setFormStatus(`Error!: ${result.error}`);
      toast.error(formStatus);
    }
  };

  if (status === 'authenticated') {
    toast.warn('이미 로그인 되어 있어 메인 페이지로 이동합니다');
    router.replace('/');
  }

  return (
    <PageTemplate>
      <Login passwordRef={passwordRef} onLogin={onLogin} />
    </PageTemplate>
  );
};

export default TheWhyPage;
