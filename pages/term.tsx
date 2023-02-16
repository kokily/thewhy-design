import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import PageTemplate from '../components/common/PageTemplate';
import TitleHeader from '../components/common/TitleHeader';
import Term from '../components/etc/Term/Term';

const TermPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="이용 약관 - 더와이컨설팅"
        canonical="https://thewhy.kr/term"
      />

      <PageTemplate>
        <TitleHeader title="(주)더와이컨설팅 이용 약관" />
        <Term />
      </PageTemplate>
    </>
  );
};

export default TermPage;
