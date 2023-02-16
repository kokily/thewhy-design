import type { ReactNode } from 'react';
import {
  AccordionContainer,
  AccordionContent,
  AccordionContents,
  AccordionHeader,
  AccordionTitle,
} from './styles';
import useAccordion from './useAccordion';

interface Props {
  title: string | ReactNode;
  body: string | ReactNode;
}

export default function Accordion({ title, body }: Props) {
  const accordion = useAccordion({ title, body });

  return (
    <AccordionContainer>
      <AccordionHeader onClick={accordion.onToggleAccordion}>
        <AccordionTitle>
          {title}
          <span>{accordion.buttonText}</span>
        </AccordionTitle>
      </AccordionHeader>

      <AccordionContents ref={accordion.parentRef}>
        <AccordionContent ref={accordion.childRef}>{body}</AccordionContent>
      </AccordionContents>
    </AccordionContainer>
  );
}
