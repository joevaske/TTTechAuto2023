import React from 'react';
import PageIntro from '../page-intro/PageIntro';
import bePartOfUsImage from '../../images/home-box/be-part-of-us.png';
import AboutUsIntro from '../about-us-intro/AboutUsIntro';
import AboutUs from '../about-us/AboutUs';
import WhatYouWillFind from '../what-you-will-find/WhatYouWillFind';
import Jobs from '../jobs/Jobs';

const bePartOfUsData = {
  title: 'Be part of us',
  image: bePartOfUsImage,
};

const BePartOfUs = () => {
  return (
    <div className='be-part-of-us'>
      <PageIntro pageIntro={bePartOfUsData} />
      <AboutUsIntro />
      <AboutUs />
      <WhatYouWillFind />
      <Jobs />
    </div>
  );
};

export default BePartOfUs;
