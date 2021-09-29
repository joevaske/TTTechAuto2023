import React, { useState, useEffect } from 'react';
import Logo from './logo/Logo';
import './Header.scss';

import MainMenu from './main-menu/MainMenu';
import MenuToggler from './main-menu/MenuToggler';
const Header = () => {
  const [menuToggle, setToggle] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // console.log('resized to: ', window.innerWidth, 'x', window.innerHeight);

      if (window.innerWidth < 1200) {
        setToggle(false);
      }
    };
    window.addEventListener('resize', handleResize);
  });

  const toggleSetter = () => {
    setToggle(!menuToggle);
  };

  return (
    <div className='header'>
      <MenuToggler
        menuToggleState={menuToggle}
        menuToggleSetter={toggleSetter}
      />
      <MainMenu menuToggleState={menuToggle} menuToggleSetter={toggleSetter} />
      <Logo />
    </div>
  );
};

export default Header;
