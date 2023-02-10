import type { Story } from '@prisma/client';
import type { GetServerSideProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import PageTemplate from '../../components/common/PageTemplate';
import ReadStory from '../../components/stories/read/ReadStory';
import db from '../../libs/db';

interface Props {
  story: Story;
  description: string[];
}

const ReadStoryPage: NextPage<Props> = ({ story, description }) => {
  return (
    <>
      <NextSeo
        title={`${story.title} - 더와이컨설팅`}
        description={description ? description.toString() : undefined}
        canonical={`https://thewhy.kr/stories/${story.id}`}
      />
      <PageTemplate>
        <ReadStory />
      </PageTemplate>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params.id as string;
  const story = await db.story.findUnique({
    where: { id },
  });
  const description = story.body
    .replace(/ /gi, '')
    .replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi, '')
    .substring(0, 50);

  return {
    props: {
      story: JSON.parse(JSON.stringify(story)),
      description: JSON.parse(JSON.stringify(description)),
    },
  };
};

export default ReadStoryPage;
