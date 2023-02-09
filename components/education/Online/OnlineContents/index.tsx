import Image from 'next/image';
import {
  OnlineContentsCol,
  OnlineContentsContainer,
  OnlineContentsList,
  OnlineContentsRow,
} from './styles';

export default function OnlineContents() {
  return (
    <OnlineContentsContainer>
      <OnlineContentsRow>
        <OnlineContentsCol>
          <Image
            src="/images/education/online01.png"
            alt="Online Program"
            width={100}
            height={70}
          />
        </OnlineContentsCol>

        <OnlineContentsList>
          줌 (ZOOM), 웹엑스 (Webex) 등 익히 알려진 실시간 형태의
          <br />
          온라인 교육이 가능합니다.
        </OnlineContentsList>
      </OnlineContentsRow>

      <OnlineContentsRow>
        <OnlineContentsCol>
          <Image
            src="/images/education/online02.png"
            alt="Online Program"
            width={130}
            height={70}
          />
        </OnlineContentsCol>

        <OnlineContentsList className="end">
          고객사의 요구 사항에 따라 동영상 형태의 교육 프로그램을
          <br />
          개발, 운영합니다.
        </OnlineContentsList>
      </OnlineContentsRow>
    </OnlineContentsContainer>
  );
}
