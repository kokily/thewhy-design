import type { ChangeEvent, SyntheticEvent } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  addNoticeAPI,
  readNoticeAPI,
  updateNoticeAPI,
} from '../../../pages/api/notices/noticesApi';
import { toast } from 'react-toastify';

export default function useAddNotice() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { id }: { id?: string } = router.query;
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const addNoticeMutate = useMutation(addNoticeAPI);
  const updateNoticeMutate = useMutation(updateNoticeAPI);

  useQuery('updateNotice', () => readNoticeAPI(id), {
    onSuccess: (data) => {
      setTitle(data.title);
      setBody(data.body);
    },
    onError: () => {},
  });

  const onChangeTitle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };

  const onChangeBody = (text: string) => {
    setBody(text);
  };

  const onBack = () => {
    router.back();
  };

  const onAddNotice = async (e: SyntheticEvent) => {
    e.preventDefault();

    if ([title, body].includes('')) {
      toast.error('빈 칸 없이 입력하세요.');
      return;
    }

    if (!id) {
      // Add Notice
      const response = await addNoticeMutate.mutateAsync({ title, body });
      await queryClient.clear();
      router.replace(`/notices/${response.id}`);
    } else {
      // Update Notice
      const response = await updateNoticeMutate.mutateAsync({
        id,
        title,
        body,
      });
      await queryClient.clear();
      router.replace(`/notices/${response.id}`);
    }
  };

  return {
    title,
    body,
    onChangeTitle,
    onChangeBody,
    onBack,
    onAddNotice,
  };
}
