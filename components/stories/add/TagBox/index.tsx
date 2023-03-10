import type { ChangeEvent } from 'react';
import { memo } from 'react';
import {
  AddTagBoxContainer,
  AddTagButton,
  AddTagForm,
  TagItemContainer,
  TagsListContainer,
} from './styles';

const TagItem = memo(
  ({ tag, onRemove }: { tag: string; onRemove: (id: string) => void }) => (
    <TagItemContainer onClick={() => onRemove(tag)}>#{tag}</TagItemContainer>
  )
);

TagItem.displayName = 'TagItem';

const TagsList = memo(
  ({ tags, onRemove }: { tags: string[]; onRemove: (id: string) => void }) => (
    <TagsListContainer>
      {tags.map((tag) => (
        <TagItem key={tag} tag={tag} onRemove={onRemove} />
      ))}
    </TagsListContainer>
  )
);

TagsList.displayName = 'TagsList';

interface Props {
  input: string;
  localTags: string[];
  onRemoveTag: (tag: string) => void;
  onChangeText: (e: ChangeEvent<HTMLInputElement>) => void;
  onSetTags: (e: ChangeEvent<HTMLFormElement>) => void;
}

export default function TagBox({ ...rest }: Props) {
  return (
    <AddTagBoxContainer>
      <p>νκ·Έ π</p>

      <AddTagForm onSubmit={rest.onSetTags}>
        <input
          placeholder="μν°λ‘ μλ ₯"
          value={rest.input}
          onChange={rest.onChangeText}
        />
        <AddTagButton type="submit">μΆκ°</AddTagButton>
      </AddTagForm>

      <TagsList tags={rest.localTags} onRemove={rest.onRemoveTag} />
    </AddTagBoxContainer>
  );
}
