import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  readStoryAPI,
  removeStoryAPI,
} from '../../../pages/api/stories/storiesApi';

export default function useReadStory() {
  const { status } = useSession();
  const router = useRouter();
  const queryClient = useQueryClient();
  const { id }: { id?: string } = router.query;
  const [removeModal, setRemoveModal] = useState(false);
  const removeStoryMutate = useMutation(removeStoryAPI);

  // Data Fetching
  const { data } = useQuery('readStory', () => readStoryAPI(id), {
    enabled: true,
  });

  const onUpdateStory = () => {
    router.push(`/stories/update/${id}`);
  };

  const onClickTag = (tagName: string) => {
    router.push(`/stories?tag=${tagName}`);
  };

  const onRemoveStory = async () => {
    if (status === 'authenticated') {
      await removeStoryMutate.mutateAsync(id);
      await queryClient.clear();
      await router.replace('/stories');
    } else {
      return;
    }
  };

  const onRemoveClick = () => {
    setRemoveModal(true);
  };

  const onConfirm = () => {
    onRemoveStory();
    setRemoveModal(false);
  };

  const onCancel = () => {
    setRemoveModal(false);
  };

  return {
    story: data,
    onUpdateStory,
    onClickTag,
    removeModal,
    onRemoveClick,
    onConfirm,
    onCancel,
    isLoggedIn: status === 'authenticated',
  };
}
