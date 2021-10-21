import React from 'react';
import './TopMenu.scss';
import { FaLinkedin } from 'react-icons/fa';

const TopMenu = () => {
  return (
    <div className='top-menu'>
      <ul className='top-menu__items'>
        <li>
          <a
            href='https://tttech-auto.talentlyft.com/'
            target='_blank'
            rel='noreferrer'
          >
            Jobs
          </a>
        </li>

        <li>
          <a
            href='https://www.linkedin.com/company/tttech-auto/'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedin className='top-menu__icon' />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TopMenu;
