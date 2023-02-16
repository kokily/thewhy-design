import Link from 'next/link';
import { isMobile } from 'react-device-detect';
import Search from '../../common/Search';
import ListQuestionsTable from './ListQuestionsTable';
import {
  ListQuestionsButton,
  ListQuestionsContainer,
  ListQuestionsContents,
  ListQuestionsSearchBox,
} from './styles';
import useListQuestions from './useListQuestions';

export default function ListQuestions() {
  const listQuestions = useListQuestions();

  return (
    <ListQuestionsContainer>
      <ListQuestionsContents>
        <ListQuestionsSearchBox
          small={listQuestions.isMobile ? listQuestions.isMobile : false}
        >
          {!isMobile && (
            <Link href="/questions/add">
              <ListQuestionsButton>글 작성</ListQuestionsButton>
            </Link>
          )}

          <Search
            mode="제목"
            searchRef={listQuestions.searchRef}
            onSearch={listQuestions.onSearch}
            onKeyPress={listQuestions.onKeyPress}
          />
        </ListQuestionsSearchBox>

        <ListQuestionsTable
          questions={listQuestions.questions}
          onReadQuestion={listQuestions.onReadQuestion}
        />
      </ListQuestionsContents>
    </ListQuestionsContainer>
  );
}
