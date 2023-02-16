import { ReadReplyContainer, ReadReplyPre } from './styles';

interface Props {
  body: string;
}

export default function ReadReply({ body }: Props) {
  return (
    <ReadReplyContainer>
      <h4>답 글</h4>
      <ReadReplyPre>{body}</ReadReplyPre>
    </ReadReplyContainer>
  );
}
