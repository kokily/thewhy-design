import LinkCardItem from '../LinkCardItem';
import { LinkCardsListContainer } from './styles';

interface Props {
  links: MainLinkType[];
}

export default function LinkCardsList({ links }: Props) {
  return (
    <LinkCardsListContainer>
      {links.map((link) => (
        <LinkCardItem key={link.id} link={link} />
      ))}
    </LinkCardsListContainer>
  );
}
