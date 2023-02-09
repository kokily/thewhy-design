import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import PageTemplate from '../../components/common/PageTemplate';
import Online from '../../components/education/Online';

const OnlinePage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="온라인 프로그램 - 더와이컨설팅"
        canonical="https://thewhy.kr/education/online"
        description="온라인 프로그램, 실시간 그리고 맞춤형 형태로 고객사가 원하는 교육 프로그램 개발 및 진행"
      />

      <PageTemplate>
        <Online />
      </PageTemplate>
    </>
  );
};

export default OnlinePage;
