import React from 'react';
import PageIntro from '../page-intro/PageIntro';
import bePartOfUsImage from '../../images/home-box/be-part-of-us-8.jpg';

import AboutUs from '../about-us/AboutUs';

const bePartOfUsData = {
  title: 'Be part of us',
  image: bePartOfUsImage,
};

const footerLinkData = {
  title: 'Jobs',
  url: 'https://tttech-auto.talentlyft.com/',
  text: 'Join us',
};

const BePartOfUs = () => {
  return (
    <div className='be-part-of-us'>
      <PageIntro pageIntro={bePartOfUsData} />

      <AboutUs aboutUsLinkData={footerLinkData} />
    </div>
  );
};

export default BePartOfUs;
