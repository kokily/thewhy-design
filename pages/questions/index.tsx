import type { GetServerSideProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import PageTemplate from '../../components/common/PageTemplate';
import ListQuestions from '../../components/questions/list/ListQuestions';
import db from '../../libs/db';

interface Props {
  description: string[];
}

const ListQuestionsPage: NextPage<Props> = ({ description }) => {
  return (
    <>
      <NextSeo
        title="교육문의 - 더와이컨설팅"
        description={description ? description.toString() : undefined}
        canonical="https://thewhy.kr/questions"
        openGraph={{
          description: description ? description.toString() : undefined,
        }}
      />
      <PageTemplate>
        <ListQuestions />
      </PageTemplate>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const questions = await db.question.findMany({
    take: 25,
    orderBy: {
      createdAt: 'desc',
    },
  });
  const description = questions.map((question) => {
    return question.body
      .replace(/ /gi, '')
      .replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi, '')
      .substring(0, 50);
  });

  return {
    props: {
      questions: JSON.parse(JSON.stringify(questions)),
      description: JSON.parse(JSON.stringify(description)),
    },
  };
};

export default ListQuestionsPage;
