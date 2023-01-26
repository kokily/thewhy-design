import { useState } from 'react';
import Link from 'next/link';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { NavItemContainer, NavItemList, NavItemOpenButton } from './styles';
import NavSubList from '../NavSubList';

interface Props {
  menu: MenuType;
  isSmall?: boolean;
}

export default function NavItem({ menu, isSmall }: Props) {
  const [isOpen, setIsOpen] = useState('');

  const onOpen = () => {
    if (isOpen === 'open') {
      setIsOpen('');
    } else {
      setIsOpen('open');
    }
  };

  return (
    <NavItemContainer className={`main ${isOpen}`}>
      {menu.items ? (
        <>
          <NavItemOpenButton onClick={onOpen} className="title">
            <span>{menu.title}</span>
            {isSmall && (
              <>
                {isOpen ? (
                  <IoIosArrowUp size={14} />
                ) : (
                  <IoIosArrowDown size={14} />
                )}
              </>
            )}
          </NavItemOpenButton>

          <NavItemList className="hidden">
            {menu.items.map((item) => (
              <NavSubList key={item.id} item={item} />
            ))}
          </NavItemList>
        </>
      ) : (
        <Link href={menu.url}>
          <a className="link">{menu.title}</a>
        </Link>
      )}
    </NavItemContainer>
  );
}
