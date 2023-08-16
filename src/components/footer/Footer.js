import React from 'react';
import './Footer.scss';

import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className='footer__left'>
          <p>&copy; TTTech Auto CEE 2023</p>
          <p> Privacy policy</p>
          <p>General conditions of access and use</p>
        </div>
        {/*    <div className='footer__center'>
        <p>General conditions of access and use</p>
      </div> */}
        <div className='footer__right'>
          <a href='http://localhost:3000/#' target='_blank'>
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
