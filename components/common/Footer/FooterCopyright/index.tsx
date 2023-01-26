import FooterCopyrightItem from './FooterCopyrightItem';
import {
  CopyrightContainer,
  CopyrightContents,
  CopyrightLayout,
} from './styles';

export default function FooterCopyright() {
  return (
    <CopyrightContainer>
      <CopyrightLayout>
        <CopyrightContents>
          <FooterCopyrightItem />
        </CopyrightContents>
      </CopyrightLayout>
    </CopyrightContainer>
  );
}
