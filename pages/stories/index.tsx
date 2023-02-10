import type { GetServerSideProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import PageTemplate from '../../components/common/PageTemplate';
import ListStories from '../../components/stories/list/ListStories';
import db from '../../libs/db';

interface Props {
  description: string[];
}

const ListStoriesPage: NextPage<Props> = ({ description }) => {
  return (
    <>
      <NextSeo
        title="The Y 이야기"
        description={description ? description.toString() : undefined}
        canonical="https://thewhy.kr/stories"
      />

      <PageTemplate>
        <ListStories />
      </PageTemplate>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const tag = query.tag as string;

  let where = tag ? { tags: { has: tag } } : undefined;

  const stories = await db.story.findMany({
    where,
    take: 25,
    orderBy: {
      createdAt: 'desc',
    },
  });
  const description = stories.map((story) => {
    return story.body
      .replace(/ /gi, '')
      .replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi, '')
      .substring(0, 50);
  });

  return {
    props: {
      stories: JSON.parse(JSON.stringify(stories)),
      description: JSON.parse(JSON.stringify(description)),
    },
  };
};

export default ListStoriesPage;
