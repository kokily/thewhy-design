import { Container, TagsBox, Title } from './styles';

interface Props {
  title: string;
  tags: Array<string>;
  onClickTag: (tagName: string) => void;
}

export default function ReadStoryTitle({ title, tags, onClickTag }: Props) {
  return (
    <Container>
      <Title>
        <h2>{title}</h2>
      </Title>

      <TagsBox>
        {tags.map((tag) => (
          <span key={tag} onClick={() => onClickTag(tag)}>
            #{tag}
          </span>
        ))}
      </TagsBox>
    </Container>
  );
}
