import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import PageTemplate from '../components/common/PageTemplate';
import TitleHeader from '../components/common/TitleHeader';
import Faq from '../components/etc/Faq/Faq';

const Faqs: NextPage = () => {
  return (
    <>
      <NextSeo title="FAQ - 더와이컨설팅" canonical="https://thewhy.kr/faq" />

      <PageTemplate>
        <TitleHeader title="FAQ" />
        <Faq />
      </PageTemplate>
    </>
  );
};

export default Faqs;
