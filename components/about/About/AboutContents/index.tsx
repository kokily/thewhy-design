import { BrowserView, MobileView } from 'react-device-detect';
import Image from 'next/image';
import {
  AboutContentsContainer,
  AboutContentsImageBox,
  AboutContentsLayout,
  AboutContentsTitle,
} from './styles';
import AboutBrowserContent from './AboutBrowser';
import AboutMobileContent from './AboutMobile';

export default function AboutContents() {
  return (
    <AboutContentsContainer>
      <AboutContentsLayout className="text">
        <AboutContentsTitle>Why The Y</AboutContentsTitle>

        <BrowserView>
          <AboutBrowserContent />
        </BrowserView>

        <MobileView>
          <AboutMobileContent />
        </MobileView>
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
