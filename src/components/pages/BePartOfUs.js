import React from 'react';
import PageIntro from '../page-intro/PageIntro';
import bePartOfUsImage from '../../images/home-box/be-part-of-us.png';
import AboutUsIntro from '../about-us-intro/AboutUsIntro';
import AboutUs from '../about-us/AboutUs';
import WhatYouWillFind from '../what-you-will-find/WhatYouWillFind';
import Jobs from '../jobs/Jobs';
import FooterLink from '../footer-link/FooterLink';

const bePartOfUsData = {
  title: 'Be part of us',
  image: bePartOfUsImage,
};

const footerLinkData = {
  title: 'Jobs',
  url: 'https://rt-rk.talentlyft.com/',
  text: 'Join us',
};

const BePartOfUs = () => {
  return (
    <div className='be-part-of-us'>
      <PageIntro pageIntro={bePartOfUsData} />
      <AboutUsIntro />
      <AboutUs />
      <WhatYouWillFind />
      <FooterLink footerLinkData={footerLinkData} />
    </div>
  );
};

export default BePartOfUs;
