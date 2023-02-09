import Image from 'next/image';
import {
  AboutContentsContainer,
  AboutContentsImageBox,
  AboutContentsLayout,
  AboutContentsTitle,
} from './styles';
import AboutBrowserContent from './AboutBrowser';
import AboutMobileContent from './AboutMobile';
import useMobile from '../../../../libs/hooks/useMobile';

export default function AboutContents() {
  const isSmall = useMobile();

  return (
    <AboutContentsContainer>
      <AboutContentsLayout className="text">
        <AboutContentsTitle>Why The Y</AboutContentsTitle>

        {isSmall ? <AboutMobileContent /> : <AboutBrowserContent />}
      </AboutContentsLayout>

      <AboutContentsImageBox>
        <Image
          src="/images/about/about01.png"
          alt="더와이컨설팅"
          width={445}
          height={631}
        />
      </AboutContentsImageBox>
    </AboutContentsContainer>
  );
}
