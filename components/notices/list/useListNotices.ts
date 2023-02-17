import type { Notice } from '@prisma/client';
import { ChangeEvent, KeyboardEvent, MouseEvent, useRef } from 'react';
import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import { useSession } from 'next-auth/react';
import useLocalStorage from 'use-local-storage';
import useObserver from '../../../libs/hooks/useObserver';
import { listNoticesAPI } from '../../../pages/api/notices/noticesApi';
import useMobile from '../../../libs/hooks/useMobile';

export default function useListNotices() {
  const { status } = useSession();
  const router = useRouter();
  const queryClient = useQueryClient();
  const isMobile = useMobile();
  const [scrollY, setScrollY] = useLocalStorage('noticesScroll', 0);
  const searchRef = useRef<HTMLInputElement>(null);
  const search = searchRef?.current?.value;

  // Data Fetching
  const { data, fetchNextPage, refetch } = useInfiniteQuery(
    'listNotices',
    ({ pageParam }) => listNoticesAPI({ cursor: pageParam, title: search }),
    {
      enabled: true,
      getNextPageParam: (data) =>
        data && data.length === 25 ? data[data.length - 1].id : undefined,
    }
  );

  const notices = useMemo(() => {
    if (!data) {
      return [];
    }

    return ([] as Notice[]).concat(...data.pages);
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

  const onReadNotice = (id: number) => {
    setScrollY(window.scrollY);
    router.push(`/notices/${id}`);
  };

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    entry.isIntersecting && fetchNextPage();
  };

  const { setTarget } = useObserver({ onIntersect });

  useEffect(() => {
    if (scrollY !== 0) window.scrollTo(0, Number(scrollY));
  }, [scrollY]);

  return {
    notices,
    searchRef,
    onSearch,
    onKeyPress,
    onReadNotice,
    setTarget,
    isLoggedIn: status === 'authenticated',
    isMobile,
  };
}
