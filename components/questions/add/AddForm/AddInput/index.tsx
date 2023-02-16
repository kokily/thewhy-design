import type { ChangeEvent } from 'react';
import { AddInputContainer } from './styles';

interface Props {
  type: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function AddInput({ ...rest }: Props) {
  return (
    <AddInputContainer
      type={rest.type}
      name={rest.name}
      value={rest.value}
      onChange={rest.onChange}
    />
  );
}
