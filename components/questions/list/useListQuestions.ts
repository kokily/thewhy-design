import type { Question } from '@prisma/client';
import { KeyboardEvent, MouseEvent, useEffect } from 'react';
import { useRef, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import useLocalStorage from 'use-local-storage';
import { listQuestionsAPI } from '../../../pages/api/questions/questionsApi';
import useObserver from '../../../libs/hooks/useObserver';
import useMobile from '../../../libs/hooks/useMobile';

export default function useListQuestions() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [scrollY, setScrollY] = useLocalStorage('questionsScroll', 0);
  const isMobile = useMobile();
  const searchRef = useRef<HTMLInputElement>(null);
  const search = searchRef?.current?.value;

  // Data Fetching
  const { data, fetchNextPage, refetch } = useInfiniteQuery(
    'listQuestions',
    ({ pageParam }) => listQuestionsAPI({ cursor: pageParam, title: search }),
    {
      enabled: true,
      getNextPageParam: (data) =>
        data && data.length === 25 ? data[data.length - 1].id : undefined,
    }
  );

  const questions = useMemo(() => {
    if (!data) {
      return [];
    }

    return ([] as Question[]).concat(...data.pages);
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

  const onReadQuestion = (id: string) => {
    setScrollY(window.scrollY);
    router.push(`/questions/${id}`);
  };

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    entry.isIntersecting && fetchNextPage();
  };

  const { setTarget } = useObserver({ onIntersect });

  useEffect(() => {
    if (scrollY !== 0) window.scrollTo(0, Number(scrollY));
  }, []);

  return {
    questions,
    searchRef,
    onSearch,
    onKeyPress,
    onReadQuestion,
    setTarget,
    isMobile,
  };
}
