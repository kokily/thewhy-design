import { ImLocation } from 'react-icons/im';
import { AiOutlineMail } from 'react-icons/ai';
import {
  LeftContainer,
  LeftIcon,
  LeftIconsBox,
  LeftItem,
  LeftLead,
  LeftList,
  LeftTitle,
} from './leftStyles';

export default function FooterContentsLeft() {
  return (
    <LeftContainer>
      <LeftTitle>Contact Us</LeftTitle>

      <LeftLead className="rep">050-5055-7221</LeftLead>
      <LeftLead>Tel: 050-5055-7221</LeftLead>
      <LeftLead>Fax: 050-4386-7221</LeftLead>

      <LeftList>
        <LeftItem>
          <ImLocation size={16} color="#0088cc" />
          <LeftLead>
            경기도 남양주시 다산중앙로19번길
            <br />
            25-23, 에프508호
            <br />
            (다산동, 다산진건블루웨일
            <br />
            지식산업센터 2차)
          </LeftLead>
        </LeftItem>

        <LeftItem>
          <AiOutlineMail size={16} color="#0088cc" />
          <LeftLead>thewhy@thewhy.kr</LeftLead>
        </LeftItem>
      </LeftList>

      <LeftIconsBox>
        <a href="/">
          <LeftIcon className="youtube" />
        </a>
        <a href="/">
          <LeftIcon className="naver" />
        </a>
      </LeftIconsBox>
    </LeftContainer>
  );
}
