import { useEffect, useState } from 'react';

export default function useHeaderScroll() {
  const [move, setMove] = useState(0);

  const onScroll = () => {
    setMove(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return {
    move,
  };
}
