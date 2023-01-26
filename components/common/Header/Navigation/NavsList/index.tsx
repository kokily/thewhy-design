import NavItem from './NavItem';
import { NavMenu } from '../../../../../libs/menu';
import { NavsListContainer, NavsListList } from './styles';

export interface Props {
  toggle?: boolean;
  isSmall?: boolean;
}

export default function NavsList({ toggle, isSmall }: Props) {
  return (
    <NavsListContainer toggle={toggle}>
      <NavsListList className="menu">
        {NavMenu.map((menu) => (
          <NavItem key={menu.id} menu={menu} isSmall={isSmall} />
        ))}
      </NavsListList>
    </NavsListContainer>
  );
}
