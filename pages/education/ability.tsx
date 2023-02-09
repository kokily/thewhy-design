import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import PageTemplate from '../../components/common/PageTemplate';
import Ability from '../../components/education/Ability';

const AbilityPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="직무 역량강화 - 더와이컨설팅"
        canonical="https://thewhy.kr/education/ability"
        description="직무역량 강화, 직무분석을 통해 체계적인 교육훈련 프로그램 도출 및 제시"
      />

      <PageTemplate>
        <Ability />
      </PageTemplate>
    </>
  );
};
export default AbilityPage;
