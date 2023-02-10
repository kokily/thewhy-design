import type { ChangeEvent, SyntheticEvent } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  addStoryAPI,
  readStoryAPI,
  updateStoryAPI,
} from '../../../pages/api/stories/storiesApi';
import { imageUpdate } from '../../../libs/utils/imageUpdate';
import { toast } from 'react-toastify';

export default function useAddStory() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { id }: { id?: string } = router.query;
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const addStoryMutate = useMutation(addStoryAPI);
  const updateStoryMutate = useMutation(updateStoryAPI);

  if (id) {
    // Loading for update story
    useQuery('updateStory', () => readStoryAPI(id), {
      onSuccess: (data) => {
        setTitle(data.title);
        setBody(data.body);
        setThumbnail(data.thumbnail);
        setTags(data.tags);
      },
      onError: () => {},
    });
  }

  const onChangeTitle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };

  const onChangeBody = (text: string) => {
    setBody(text);
  };

  const onChangeTags = (nextTags: string[]) => {
    setTags(nextTags);
  };

  const onUploadThumbnail = () => {
    const upload = document.createElement('input');

    upload.type = 'file';
    upload.onchange = async (e) => {
      if (!upload.files) return;

      const file = upload.files[0];
      const target = await imageUpdate(file);

      setThumbnail(target);
    };
    upload.click();
  };

  const onBack = () => {
    router.back();
  };

  const onAddStory = async (e: SyntheticEvent) => {
    e.preventDefault();

    if ([title, body, thumbnail, tags].includes('')) {
      toast.error('빈 칸 없이 입력해 주세요.');
      return;
    }

    if (!id) {
      const response = await addStoryMutate.mutateAsync({
        title,
        body,
        thumbnail,
        tags,
      });

      await queryClient.clear();
      await router.replace(`/stories/${response.id}`);
    } else {
      const response = await updateStoryMutate.mutateAsync({
        id,
        title,
        body,
        thumbnail,
        tags,
      });

      await queryClient.clear();
      await router.replace(`/stories/${response.id}`);
    }
  };

  return {
    title,
    body,
    thumbnail,
    tags,
    onChangeTitle,
    onChangeBody,
    onChangeTags,
    onUploadThumbnail,
    onBack,
    onAddStory,
  };
}
