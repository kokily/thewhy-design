import type { NextPage } from 'next';
import PageTemplate from '../../../components/common/PageTemplate';
import TitleHeader from '../../../components/common/TitleHeader';
import AddQuestion from '../../../components/questions/add/AddQuestion';

const UpdateQuestionPage: NextPage = () => {
  return (
    <PageTemplate>
      <TitleHeader title="문의 글 수정" />
      <AddQuestion />
    </PageTemplate>
  );
};

export default UpdateQuestionPage;
