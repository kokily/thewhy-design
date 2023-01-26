import { useCallback, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import useMedia from '../../../../libs/hooks/useMedia';
import NavsList from './NavsList';
import {
  NavigationContainer,
  NavigationMobile,
  NavigationMobileWrapper,
} from './styles';

export default function Navigation() {
  const isSmall = useMedia('(max-width: 992px)');
  const [toggle, setToggle] = useState(false);

  const onToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  return (
    <NavigationContainer>
      {isSmall ? (
        <NavigationMobileWrapper>
          <NavigationMobile>
            {toggle ? (
              <IoMdClose className="on" size={30} onClick={onToggle} />
            ) : (
              <GiHamburgerMenu className="off" size={30} onClick={onToggle} />
            )}
          </NavigationMobile>

          <NavsList toggle={toggle} isSmall={isSmall} />
        </NavigationMobileWrapper>
      ) : (
        <NavsList isSmall={isSmall} />
      )}
    </NavigationContainer>
  );
}
