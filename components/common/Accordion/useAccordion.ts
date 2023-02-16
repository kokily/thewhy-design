import type { ReactNode, MouseEvent } from 'react';
import { useRef, useState, useCallback } from 'react';

interface Props {
  title: string | ReactNode;
  body: string | ReactNode;
}

export default function useAccordion({ title, body }: Props) {
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const [toggle, setToggle] = useState(false);

  const onToggleAccordion = useCallback(
    (e: MouseEvent) => {
      // 상위 엘리먼트로 전파 중지(이벤트 버블링)
      e.stopPropagation();

      if (parentRef.current === null || childRef.current === null) {
        return;
      }

      if (parentRef.current.clientHeight > 0) {
        parentRef.current.style.height = '0';
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
      }

      setToggle((prev) => !prev);
    },
    [toggle]
  );

  const parentRefHeight = parentRef.current?.style.height ?? '0px';
  const buttonText = parentRefHeight === '0px' ? '∧' : '∨';

  return {
    buttonText,
    onToggleAccordion,
    parentRef,
    childRef,
  };
}
