import FooterContents from './FooterContents';
import FooterCopyright from './FooterCopyright';
import { FooterContainer } from './styles';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContents />
      <FooterCopyright />
    </FooterContainer>
  );
}
