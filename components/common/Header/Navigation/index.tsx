import { useCallback, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import NavsList from './NavsList';
import {
  NavigationContainer,
  NavigationMobile,
  NavigationMobileWrapper,
} from './styles';
import useMobile from '../../../../libs/hooks/useMobile';

export default function Navigation() {
  const isSmall = useMobile();
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
