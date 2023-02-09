import Image from 'next/image';
import AbilityPage from '../../../pages/education/ability';
import ServiceFooter from '../Service/ServiceFooter';
import {
  AbilityContainer,
  AbilityContents,
  AbilityHeader,
  AbilityPane,
  AbilityTitle,
} from './styles';

export default function Ability() {
  return (
    <AbilityContainer>
      <Image
        src="/images/education/edu05.png"
        alt="직무역량 강화"
        width={1110}
        height={296}
      />

      <AbilityHeader>
        <AbilityTitle>직무역량강화</AbilityTitle>
        <AbilityPane>
          직무분석은 직무의 역할을 분석하는 것입니다. 직무를 수행하면서 달성해야
          하는 목표는 무엇이며, 목표 달성 가능성을 높여주는 다양한 요인들을 찾는
          과정입니다.
          <br />
          직무분석을 통해 직무수행자가 갖추어야 하는 역량은 무엇이며, 해당
          역량을 갖추기 위한 다양한 교육 프로그램이 도출됩니다.
          <br />
          직무분석을 통해 체계적인 교육훈련 프로그램을 도출하여 직무역량 강화에
          꼭 필요한 교육훈련을 제시합니다.
        </AbilityPane>
      </AbilityHeader>

      <AbilityContents>
        <Image
          src="/images/education/ability.png"
          alt="직무역량강화"
          width={825}
          height={738}
        />
      </AbilityContents>

      <ServiceFooter />
    </AbilityContainer>
  );
}
