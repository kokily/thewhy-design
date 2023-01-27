import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import About from '../../components/about/About';
import PageTemplate from '../../components/common/PageTemplate';

const AboutPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="더와이컨설팅을 소개합니다 - 더와이컨설팅"
        canonical="https://thewhy.kr/about"
      />
      <PageTemplate>
        <About />
      </PageTemplate>
    </>
  );
};

export default AboutPage;
