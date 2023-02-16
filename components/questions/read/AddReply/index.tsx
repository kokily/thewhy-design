import type { ChangeEvent, MouseEvent } from 'react';
import Button from '../../../common/Button';
import { AddReplyBox, AddReplyButtonBox, AddReplyContainer } from './styles';

interface Props {
  reply: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onAddReply: (e: MouseEvent) => void;
}

export default function AddReply({ reply, onChange, onAddReply }: Props) {
  return (
    <AddReplyContainer>
      <AddReplyBox>
        <h4>답글 달기</h4>
        <textarea rows={8} name="reply" value={reply} onChange={onChange} />

        <AddReplyButtonBox>
          <Button submit onClick={onAddReply}>
            답글 저장
          </Button>
        </AddReplyButtonBox>
      </AddReplyBox>
    </AddReplyContainer>
  );
}
