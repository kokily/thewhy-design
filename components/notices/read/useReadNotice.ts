import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  readNoticeAPI,
  removeNoticeAPI,
} from '../../../pages/api/notices/noticesApi';

export default function useReadNotice() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { status } = useSession();
  const { id }: { id?: string } = router.query;
  const [removeModal, setRemoveModal] = useState(false);
  const removeNoticeMutate = useMutation(removeNoticeAPI);

  // Data Fetching
  const { data } = useQuery('readNotice', () => readNoticeAPI(id!), {
    enabled: true,
  });

  const onUpdateNotice = () => {
    router.push(`/notices/update/${id}`);
  };

  const onRemoveNotice = async () => {
    if (status === 'authenticated') {
      await removeNoticeMutate.mutateAsync(id);
      await queryClient.clear();
      await router.replace('/notices');
    } else {
      return;
    }
  };

  const onRemoveClick = () => {
    setRemoveModal(true);
  };

  const onConfirm = () => {
    onRemoveNotice();
    setRemoveModal(false);
  };

  const onCancel = () => {
    setRemoveModal(false);
  };

  return {
    notice: data,
    onUpdateNotice,
    removeModal,
    onRemoveClick,
    onConfirm,
    onCancel,
    isLoggedIn: status === 'authenticated',
  };
}
