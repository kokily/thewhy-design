import type { Story } from '@prisma/client';
import type { KeyboardEvent, MouseEvent } from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import useLocalStorage from 'use-local-storage';
import { listStoriesAPI } from '../../../pages/api/stories/storiesApi';
import useObserver from '../../../libs/hooks/useObserver';
import useMobile from '../../../libs/hooks/useMobile';

export default function useListStories() {
  const { status } = useSession();
  const isMobile = useMobile();
  const router = useRouter();
  const queryClient = useQueryClient();
  const searchRef = useRef<HTMLInputElement>(null);
  const search = searchRef?.current?.value;
  const [tag, setTag] = useState('');
  const [scrollY, setScrollY] = useLocalStorage('storiesScroll', 0);

  // Data Fetching
  const { data, fetchNextPage, refetch } = useInfiniteQuery(
    'listStories',
    ({ pageParam }) =>
      listStoriesAPI({ cursor: pageParam, title: search, tag }),
    {
      enabled: true,
      getNextPageParam: (data) =>
        data && data.length === 12 ? data[data.length - 1].id : undefined,
    }
  );

  const stories = useMemo(() => {
    if (!data) {
      return [];
    }

    return ([] as Story[]).concat(...data.pages);
  }, [data]);

  const onSearch = async (e: MouseEvent) => {
    e.preventDefault();
    await queryClient.clear();
    await refetch();
  };

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => {
    if (e.key === 'Enter') {
      onSearch(e);
    }
  };

  const onClickTag = async (tagName: string) => {
    await queryClient.clear();
    await setTag(tagName);
    await refetch();
  };

  const onReadStory = (id: string) => {
    setScrollY(window.scrollY);
    router.push(`/stories/${id}`);
  };

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    entry.isIntersecting && fetchNextPage();
  };

  const { setTarget } = useObserver({ onIntersect });

  useEffect(() => {
    if (scrollY !== 0) window.scrollTo(0, Number(scrollY));
  }, []);

  return {
    stories,
    searchRef,
    onSearch,
    onKeyPress,
    onClickTag,
    onReadStory,
    setTarget,
    isLoggedIn: status === 'authenticated',
    isMobile,
  };
}
