import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import PageTemplate from '../components/common/PageTemplate';
import TitleHeader from '../components/common/TitleHeader';
import Privacy from '../components/etc/Privacy';

const PrivacyPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="개인정보처리방침 - 더와이컨설팅"
        canonical="https://thewhy.kr/privacy"
      />

      <PageTemplate>
        <TitleHeader title="개인정보처리방침" />
        <Privacy />
      </PageTemplate>
    </>
  );
};

export default PrivacyPage;
