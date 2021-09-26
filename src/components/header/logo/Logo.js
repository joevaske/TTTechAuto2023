import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/TTTechAuto_Logo.svg';
import './Logo.scss';

const Logo = () => {
  return (
    <div className='logo'>
      <Link to='/'>
        <img src={logo} alt='TTTech Auto Logo' />
      </Link>
    </div>
  );
};

export default Logo;
