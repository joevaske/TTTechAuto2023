import React from 'react';
import './PageIntro.scss';
import parse from 'html-react-parser';

const PageIntro = ({ pageIntro }) => {
  return (
    <div
      className='page-intro '
      style={{
        backgroundImage: 'url(' + pageIntro.image + ')',
        backgroundSize: 'cover',
      }}
    >
      <h1 className='page-intro__title fade-in'>{parse(pageIntro.title)}</h1>
    </div>
  );
};

export default PageIntro;
