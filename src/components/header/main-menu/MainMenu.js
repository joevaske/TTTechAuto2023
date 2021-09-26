import React from 'react';
import { Link } from 'react-router-dom';
import './MainMenu.scss';

const MainMenu = ({ menuToggleState }) => {
  return (
    <div className={`main-menu ${menuToggleState === true ? 'active' : ''}`}>
      <ul className='main-menu__items'>
        <li>
          <Link to='/what-we-do'>What we do</Link>
        </li>
        <li>Be part of us</li>
        <li>Contact and locations</li>
        <li>What's going on</li>
      </ul>
    </div>
  );
};

export default MainMenu;
