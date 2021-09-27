import React from 'react';
import whatWeDoImage from '../../images/home-box/what-we-do.jpg';
import PageIntro from '../page-intro/PageIntro';
import WhatWeDoIntro from '../what-we-do-intro/WhatWeDoIntro';
const whatWeDoData = {
  title: 'What we do',
  image: whatWeDoImage,
};

const WhatWeDo = () => {
  return (
    <div className='what-we-do'>
      <PageIntro pageIntro={whatWeDoData} />
      <WhatWeDoIntro />
    </div>
  );
};

export default WhatWeDo;
