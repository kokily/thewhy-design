import LinkCardsList from './LinkCardsList';
import {
  HomeLinksContainer,
  HomeLinksLead,
  HomeLinksTitle,
  HomeLinksTopContent,
} from './styles';

interface Props {
  links: MainLinkType[];
}

export default function HomeLinks({ links }: Props) {
  return (
    <HomeLinksContainer>
      <HomeLinksTopContent>
        <HomeLinksTitle>교육 프로그램</HomeLinksTitle>
        <HomeLinksLead>
          더와이 컨설팅에서 진행하는 맞춤화된 교육 프로그램입니다.
        </HomeLinksLead>
      </HomeLinksTopContent>

      <LinkCardsList links={links} />
    </HomeLinksContainer>
  );
}
