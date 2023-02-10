import Link from 'next/link';
import Search from '../../common/Search';
import StoryCard from './StoryCard';
import { Button, Container, Contents, SearchBox } from './styles';
import useListStories from './useListStories';

export default function ListStories() {
  const listStories = useListStories();

  return (
    <Container>
      <Contents>
        <SearchBox
          small={listStories.isMobile || false}
          logged={listStories.isLoggedIn}
        >
          {!listStories.isMobile && listStories.isLoggedIn && (
            <Link href="/stories/add">
              <Button>글 작성</Button>
            </Link>
          )}

          <Search
            mode="제목"
            searchRef={listStories.searchRef}
            onSearch={listStories.onSearch}
            onKeyPress={listStories.onKeyPress}
          />
        </SearchBox>
      </Contents>

      {listStories.stories.map((story) => (
        <StoryCard
          story={story}
          onReadStory={listStories.onReadStory}
          onClickTag={listStories.onClickTag}
        />
      ))}

      <div ref={listStories.setTarget} />
    </Container>
  );
}
