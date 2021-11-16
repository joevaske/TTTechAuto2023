import React from 'react';

import studentsCornerImage from '../../images/home-box/students-corner.webp';
import PageIntro from '../page-intro/PageIntro';
import StudentsCornerModule from '../students-corner-module/StudentsCornerModule';

const studentsCornerData = {
  title: "Students' corner",
  image: studentsCornerImage,
};

const StudentsCorner = () => {
  const lang = 'en-RS';
  document.documentElement.lang = lang;

  return (
    <div className='students-corner'>
      <PageIntro pageIntro={studentsCornerData} />
      <StudentsCornerModule />
    </div>
  );
};

export default StudentsCorner;
