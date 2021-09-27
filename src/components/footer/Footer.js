import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__left'>
        <p>&copy; TTTech Auto</p>
      </div>
      <div className='footer__center'>
        <p>General conditions of access and use</p>
      </div>
      <div className='footer__right'>
        <p> Privacy and cookies policy</p>
      </div>
    </div>
  );
};

export default Footer;
