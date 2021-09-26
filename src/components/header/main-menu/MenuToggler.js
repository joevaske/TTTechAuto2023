import React from 'react';
import { FaBars } from 'react-icons/fa';
import './MenuToggler.scss';

const MenuToggler = ({ menuToggleState, menuToggleSetter }) => {
  return (
    <div className={`menu-toggler ${menuToggleState === true ? 'active' : ''}`}>
      <FaBars onClick={() => menuToggleSetter(!menuToggleState)} />
    </div>
  );
};

export default MenuToggler;
