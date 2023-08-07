import React from 'react';
import { Link } from 'react-router-dom';
import './MainMenu.scss';

const MainMenu = ({ menuToggleState, menuToggleSetter }) => {
  return (
    <div className={`main-menu ${menuToggleState === true ? 'active' : ''}`}>
      <ul className='main-menu__items'>
        <li>
          <Link
            to='/what-we-do'
            onClick={() => menuToggleSetter(!menuToggleState)}
          >
            What we do
          </Link>
        </li>
        <li>
          <Link
            to='/be-part-of-us'
            onClick={() => menuToggleSetter(!menuToggleState)}
          >
            Be part of us
          </Link>
        </li>
        <li>
          <Link
            to='/contact-and-locations'
            onClick={() => menuToggleSetter(!menuToggleState)}
          >
            Contact and locations
          </Link>
        </li>
        <li>
          <Link
            to='/students-corner'
            onClick={() => menuToggleSetter(!menuToggleState)}
          >
            Students' corner
          </Link>
        </li>
        {/*  <li>
          <Link to='/blog' onClick={() => menuToggleSetter(!menuToggleState)}>
            Blog - SRB/CRO/BIH
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default MainMenu;
