import type { Story } from '@prisma/client';
import formatDate from '../../../../libs/utils/formatDate';
import {
  Body,
  CardContainer,
  Container,
  Contents,
  Tag,
  Tags,
  Title,
} from './styles';
import { Thumbnail } from './styles';

interface Props {
  story: Story;
  onReadStory: (id: string) => void;
  onClickTag: (tagName: string) => void;
}

export default function StoryCard({ ...rest }: Props) {
  return (
    <Container>
      <Contents>
        <Thumbnail
          src={rest.story.thumbnail}
          alt={rest.story.title}
          onClick={() => rest.onReadStory(rest.story.id)}
          width={265}
          height={265}
        />

        <CardContainer>
          <Title onClick={() => rest.onReadStory(rest.story.id)}>
            {rest.story.title}
          </Title>
          <Body>
            {formatDate(new Date(rest.story.createdAt).toLocaleDateString())}{' '}
            작성
          </Body>
          <Tags>
            {rest.story.tags.map((tag) => (
              <Tag key={tag} onClick={() => rest.onClickTag(tag)}>
                #{tag}
              </Tag>
            ))}
          </Tags>
        </CardContainer>
      </Contents>
    </Container>
  );
}
