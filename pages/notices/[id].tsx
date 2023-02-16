import type { Notice } from '@prisma/client';
import type { GetServerSideProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import PageTemplate from '../../components/common/PageTemplate';
import TitleHeader from '../../components/common/TitleHeader';
import ReadNotice from '../../components/notices/read/ReadNotice';
import db from '../../libs/db';

interface Props {
  notice: Notice;
  description: string[];
}

const ReadNoticePage: NextPage<Props> = ({ notice, description }) => {
  return (
    <>
      <NextSeo
        title={`${notice.title} - 더와이컨설팅`}
        description={description ? description.toString() : undefined}
        canonical={`https://thewhy.kr/notice/${notice.id}`}
        openGraph={{
          description: description ? description.toString() : undefined,
        }}
      />

      <PageTemplate>
        <TitleHeader title={notice.title} />
        <ReadNotice />
      </PageTemplate>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params.id as string;
  const notice = await db.notice.findUnique({
    where: { id: parseInt(id) },
  });
  const description = notice.body
    .replace(/ /gi, '')
    .replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi, '')
    .substring(0, 50);

  return {
    props: {
      notice: JSON.parse(JSON.stringify(notice)),
      description: JSON.parse(JSON.stringify(description)),
    },
  };
};

export default ReadNoticePage;
