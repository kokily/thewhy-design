import { useEffect, useState } from 'react';
import useIsMounted from './useIsMounted';

export default function useMedia(query: string) {
  if (typeof window !== 'undefined') {
    const [matches, setMatches] = useState(
      () => window.matchMedia(query).matches
    );
    const isMounted = useIsMounted();

    useEffect(() => {
      if (!isMounted()) {
        return;
      }

      const mediaQueryList = window.matchMedia(query);

      const listener = () => {
        if (isMounted()) {
          setMatches(mediaQueryList.matches);
        }
      };

      mediaQueryList.addListener(listener);

      setMatches(mediaQueryList.matches);

      return () => {
        mediaQueryList.removeListener(listener);
      };
    }, [query, isMounted]);

    return matches;
  }
}
