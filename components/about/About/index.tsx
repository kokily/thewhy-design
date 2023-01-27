import Image from 'next/image';
import AboutContents from './AboutContents';
import { AboutBottom, AboutContainer, AboutTitle } from './styles';

export default function About() {
  return (
    <AboutContainer>
      <Image
        src="/images/about/about.png"
        alt="더와이컨설팅 소개"
        width={1110}
        height={297}
      />

      <AboutContents />

      <AboutBottom>
        <AboutTitle>더와이컨설팅이 가는 길</AboutTitle>
        <Image
          src="/images/about/about02.png"
          alt="더와이컨설팅이 가는 길"
          width={1110}
          height={1049}
        />
      </AboutBottom>
    </AboutContainer>
  );
}
