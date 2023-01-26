import Link from 'next/link';
import { NavSubListContainer, NavSubListLinkName } from './styles';

interface Props {
  item: ItemType;
}

export default function NavSubList({ item }: Props) {
  return (
    <NavSubListContainer>
      <Link href={item.subUrl}>
        <NavSubListLinkName>{item.subTitle}</NavSubListLinkName>
      </Link>
    </NavSubListContainer>
  );
}
