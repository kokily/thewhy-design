import { useEffect, useState } from 'react';
import useMedia from './useMedia';

export default function useMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMedia('(max-width: 768px)');

  useEffect(() => {
    if (mobile) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [mobile]);

  return isMobile;
}
