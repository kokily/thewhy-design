import Link from 'next/link';
import { MdKeyboardArrowRight } from 'react-icons/md';
import {
  RightContainer,
  RightItem,
  RightLayout,
  RightLead,
  RightLinksBox,
  RightList,
  RightTitle,
} from './rightStyles';

export default function FooterContentsRight() {
  return (
    <RightContainer>
      <RightTitle>회사소개</RightTitle>
      <RightLead>
        더와이컨설팅은 행복한 삶을 꿈꾸는 "커뮤니케이션" 전문 교육 컨설팅
        회사입니다.
      </RightLead>
      <RightLead>
        우리가 존재하는 이유는 커뮤니케이션을 통해 개인과 조직의 행복을 돕는
        것입니다.
      </RightLead>
      <RightLead>
        우리의 비전은 대한민국의 직장인들이 모두 행복해 할 때까지,
      </RightLead>
      <RightLead>
        그래서 대한민국을 대표하는 커뮤니케이션 전문가가 되는 것입니다.
      </RightLead>

      <RightLinksBox>
        <RightLayout>
          <RightTitle>주요링크</RightTitle>

          <RightList>
            <RightItem>
              <MdKeyboardArrowRight size={17} color="#0088cc" />
              <Link href="/question">
                <a>교육문의</a>
              </Link>
            </RightItem>
            <RightItem>
              <MdKeyboardArrowRight size={17} color="#0088cc" />
              <Link href="/education">
                <a>교육 프로그램</a>
              </Link>
            </RightItem>
            <RightItem>
              <MdKeyboardArrowRight size={17} color="#0088cc" />
              <Link href="/online">
                <a>온라인 프로그램</a>
              </Link>
            </RightItem>
            <RightItem>
              <MdKeyboardArrowRight size={17} color="#0088cc" />
              <Link href="/stories">
                <a>The Y 이야기</a>
              </Link>
            </RightItem>
          </RightList>
        </RightLayout>
      </RightLinksBox>
    </RightContainer>
  );
}
