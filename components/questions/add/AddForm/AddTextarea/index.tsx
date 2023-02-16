import type { ChangeEvent } from 'react';
import { AddTextareaContainer } from './styles';

interface Props {
  body: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function AddTextarea({ body, onChange }: Props) {
  return (
    <AddTextareaContainer
      name="body"
      value={body}
      onChange={onChange}
      rows={10}
    />
  );
}
