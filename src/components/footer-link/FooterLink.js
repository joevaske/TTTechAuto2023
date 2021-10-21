import React from 'react';
import './FooterLink.scss';

const FooterLink = ({ footerLinkData }) => {
  return (
    <div className='footer-link'>
      <div className='footer-link__heading'>
        <h2 className='footer-link__heading__title'>{footerLinkData.title}</h2>
        <span className='page-title-decoration'></span>
      </div>
      <div className='footer-link__button'>
        {/* <Link className='button-blue' to='/contact-and-location'>
        Join us
      </Link> */}
        <a
          className='button-blue'
          href={footerLinkData.url}
          target='_blank'
          rel='noreferrer'
        >
          {footerLinkData.text}
        </a>
      </div>
    </div>
  );
};

export default FooterLink;
