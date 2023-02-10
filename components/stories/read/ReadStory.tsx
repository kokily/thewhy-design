import Image from 'next/image';
import Markdown from '../../common/Markdown';
import ReadButtons from '../../common/ReadButtons';
import ReadStoryDate from './ReadStoryDate';
import ReadStoryTitle from './ReadStoryTitle';
import { Container, FlexBox } from './styles';
import useReadStory from './useReadStory';

export default function ReadStory() {
  const readStory = useReadStory();

  return readStory.story ? (
    <Container>
      <FlexBox>
        <Image
          src={readStory.story.thumbnail}
          alt={readStory.story.title}
          width={1110}
          height={1110}
        />
      </FlexBox>

      {readStory.isLoggedIn && (
        <ReadButtons
          modal={readStory.removeModal}
          onRemoveClick={readStory.onRemoveClick}
          onConfirm={readStory.onConfirm}
          onCancel={readStory.onCancel}
          onUpdate={readStory.onUpdateStory}
        />
      )}

      <FlexBox>
        <ReadStoryDate date={readStory.story.createdAt.toString()} />
        <ReadStoryTitle
          title={readStory.story.title}
          tags={readStory.story.tags}
          onClickTag={readStory.onClickTag}
        />
      </FlexBox>

      <FlexBox>
        <Markdown markdown={readStory.story.body} />
      </FlexBox>
    </Container>
  ) : null;
}
