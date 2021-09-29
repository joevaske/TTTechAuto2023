import React from 'react';
import './PageIntro.scss';

const PageIntro = ({ pageIntro }) => {
  return (
    <div
      className='page-intro '
      style={{
        backgroundImage: 'url(' + pageIntro.image + ')',
        backgroundSize: 'cover',
      }}
    >
      <h1 className='page-intro__title fade-in'>{pageIntro.title}</h1>
    </div>
  );
};

export default PageIntro;
