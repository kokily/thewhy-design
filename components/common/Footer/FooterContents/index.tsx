import FooterContentsLeft from './FooterSides/FooterContentsLeft';
import FooterContentsRight from './FooterSides/FooterContentsRight';
import {
  FooterContentsContainer,
  FooterContentsContents,
  FooterContentsRibbon,
  FooterContentsRibbonText,
} from './styles';

export default function FooterContents() {
  return (
    <FooterContentsContainer>
      <FooterContentsRibbon>
        <FooterContentsRibbonText>Get in Touch!</FooterContentsRibbonText>
      </FooterContentsRibbon>

      <FooterContentsContents>
        <FooterContentsLeft />
        <FooterContentsRight />
      </FooterContentsContents>
    </FooterContentsContainer>
  );
}
