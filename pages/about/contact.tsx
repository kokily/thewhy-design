import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Contact from '../../components/about/Contact';
import PageTemplate from '../../components/common/PageTemplate';

const ContactPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="연락하세요 - 더와이컨설팅"
        canonical="https://thewhy.kr/about/contact"
      />
      <PageTemplate>
        <Contact />
      </PageTemplate>
    </>
  );
};

export default ContactPage;
