import type { SyntheticEvent } from 'react';
import Button from '../../Button';
import { EditorFooterContainer } from './styles';

interface Props {
  onBack: () => void;
  onSubmit: (e: SyntheticEvent) => void;
}

export default function EditorFooter({ onBack, onSubmit }: Props) {
  return (
    <EditorFooterContainer>
      <Button back onClick={onBack}>
        뒤로가기
      </Button>
      <Button submit onClick={onSubmit}>
        저장하기
      </Button>
    </EditorFooterContainer>
  );
}
