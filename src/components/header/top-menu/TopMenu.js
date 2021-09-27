import React from 'react';
import './TopMenu.scss';
import { FaLinkedin } from 'react-icons/fa';

const TopMenu = () => {
  return (
    <div className='top-menu'>
      <ul className='top-menu__items'>
        <li>Jobs</li>
        <li>EN</li>
        <li>
          <FaLinkedin className='top-menu__icon' />
        </li>
      </ul>
    </div>
  );
};

export default TopMenu;
