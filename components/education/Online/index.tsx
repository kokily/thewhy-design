import Image from 'next/image';
import ServiceFooter from '../Service/ServiceFooter';
import OnlineContents from './OnlineContents';
import {
  OnlineContainer,
  OnlineHeader,
  OnlineTitle,
  OnlinePane,
} from './styles';

export default function Online() {
  return (
    <OnlineContainer>
      <Image
        src="/images/education/online.png"
        alt="온라인 교육"
        width={1110}
        height={296}
      />

      <OnlineHeader>
        <OnlineTitle>온라인(On-Line) 프로그램</OnlineTitle>
        <OnlinePane>
          실시간 그리고 맞춤형 형태로 고객사가 원하는 교육 프로그램을 개발하고
          진행 가능합니다.
          <br />
          언제 어디서든 장소의 제약 없이 우리의 행복한 성장을 원하는 곳에
          더와이컨설팅이 온라인 교육을 진행합니다.
        </OnlinePane>
      </OnlineHeader>

      <OnlineContents />

      <ServiceFooter />
    </OnlineContainer>
  );
}
