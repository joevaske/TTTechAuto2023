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
        <li>
          <Link to='/be-part-of-us'>Be part of us</Link>
        </li>
        <li>
          <Link to='/contact-and-locations'>Contact and locations</Link>
        </li>
        <li>
          <Link to='/students-corner'>Students corner</Link>
        </li>
      </ul>
    </div>
  );
};

export default MainMenu;
