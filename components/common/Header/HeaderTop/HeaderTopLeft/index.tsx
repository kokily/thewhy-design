import {
  HeaderTopLeftContainer,
  HeaderTopLeftIcon,
  HeaderTopLeftIconsBox,
  HeaderTopLeftTitle,
} from './styles';

export default function HeaderTopLeft() {
  return (
    <HeaderTopLeftContainer>
      <HeaderTopLeftTitle>커뮤니케이션 전문 교육 컨설팅</HeaderTopLeftTitle>

      <HeaderTopLeftIconsBox>
        <a href="#null">
          <HeaderTopLeftIcon className="youtube" />
        </a>

        <a href="#null">
          <HeaderTopLeftIcon className="naver" />
        </a>
      </HeaderTopLeftIconsBox>
    </HeaderTopLeftContainer>
  );
}
