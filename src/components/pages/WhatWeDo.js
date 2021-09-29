import React from 'react';
import whatWeDoImage from '../../images/home-box/what-we-do.jpg';
import FooterLink from '../footer-link/FooterLink';
import PageIntro from '../page-intro/PageIntro';
import TehnicalStack from '../technical-stack/TehnicalStack';
import Timeline from '../timeline/Timeline';
import WhatWeDoIntro from '../what-we-do-intro/WhatWeDoIntro';
const whatWeDoData = {
  title: 'What we do',
  image: whatWeDoImage,
};
const footerLinkData = {
  title: 'Products',
  url: 'https://tttech-auto.talentlyft.com/',
  text: 'Discover more',
};

const WhatWeDo = () => {
  return (
    <div className='what-we-do'>
      <PageIntro pageIntro={whatWeDoData} />
      <WhatWeDoIntro />
      <Timeline />
      <TehnicalStack />
      <FooterLink footerLinkData={footerLinkData} />
    </div>
  );
};

export default WhatWeDo;
