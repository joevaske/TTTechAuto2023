import React from 'react';

import studentsCornerImage from '../../images/home-box/students-corner.webp';
import PageIntro from '../page-intro/PageIntro';
import StudentsCornerModule from '../students-corner-module/StudentsCornerModule';

const studentsCornerData = {
  title: "Students' corner",
  image: studentsCornerImage,
};

const StudentsCorner = () => {
  return (
    <div className='students-corner'>
      <PageIntro pageIntro={studentsCornerData} />
      <StudentsCornerModule />
    </div>
  );
};

export default StudentsCorner;
