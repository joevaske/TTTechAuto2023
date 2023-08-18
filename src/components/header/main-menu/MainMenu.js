import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './MainMenu.scss';

const MainMenu = ({ menuToggleState, menuToggleSetter }) => {
  const handleClick = (event) => {
    menuToggleSetter(!menuToggleState);
  };

  return (
    <div className={`main-menu ${menuToggleState === true ? 'active' : ''}`}>
      <ul className='main-menu__items'>
        <li>
          <NavLink
            to='/about-us'
            onClick={() => handleClick()}
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
          >
            About us
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/career-opportunities'
            onClick={() => handleClick()}
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
          >
            Carreer Opportunities
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/contact-and-locations'
            onClick={() => handleClick()}
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
          >
            Contact
          </NavLink>
        </li>
        {/*  <li>
          <Link
            to='/students-corner'
            onClick={() => menuToggleSetter(!menuToggleState)}
          >
            Students' corner
          </Link>
        </li> */}
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
