import type { NextPage } from 'next';
import PageTemplate from '../../components/common/PageTemplate';
import TitleHeader from '../../components/common/TitleHeader';
import AddQuestion from '../../components/questions/add/AddQuestion';

const AddQuestionPage: NextPage = () => {
  return (
    <PageTemplate>
      <TitleHeader title="교육 문의" />
      <AddQuestion />
    </PageTemplate>
  );
};

export default AddQuestionPage;
