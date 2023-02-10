import type { GetServerSideProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import PageTemplate from '../../components/common/PageTemplate';
import ListNotices from '../../components/notices/list/ListNotices';
import db from '../../libs/db';

interface Props {
  description: string[];
}

const ListNoticesPage: NextPage<Props> = ({ description }) => {
  return (
    <>
      <NextSeo
        title="공지사항 - 더와이컨설팅"
        description={description ? description.toString() : undefined}
        canonical="https://thewhy.kr/notices"
        openGraph={{
          description: description ? description.toString() : undefined,
        }}
      />

      <PageTemplate>
        <ListNotices />
      </PageTemplate>
    </>
  );
};

// SSR
export const getServerSideProps: GetServerSideProps = async () => {
  const notices = await db.notice.findMany({
    take: 25,
    orderBy: {
      createdAt: 'desc',
    },
  });
  const description = notices.map((notice) => {
    return notice.body
      .replace(/ /gi, '')
      .replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi, '')
      .substring(0, 50);
  });

  return {
    props: {
      notices: JSON.parse(JSON.stringify(notices)),
      description: JSON.parse(JSON.stringify(description)),
    },
  };
};

export default ListNoticesPage;
