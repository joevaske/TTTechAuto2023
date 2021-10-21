import React from 'react';
import HomeBoxModule from './HomeBoxModule';
import './HomeBox.scss';

import whatWeDoBox from '../../images/home-box/what-we-do.webp';
import bePartOfUsBox from '../../images/home-box/be-part-of-us.webp';
import contactAndLocationsBox from '../../images/home-box/contact-and-location.webp';
import studentsCornerBox from '../../images/home-box/students-corner.webp';

const boxes = [
  {
    id: 1,
    title: 'What we do',
    url: 'what-we-do',
    image: whatWeDoBox,
  },
  {
    id: 2,
    title: 'Be part of us',
    url: 'be-part-of-us',
    image: bePartOfUsBox,
  },
  {
    id: 3,
    title: 'Contact and locations',
    url: 'contact-and-locations',
    image: contactAndLocationsBox,
  },
  {
    id: 4,
    title: "Students' corner",
    url: 'students-corner',
    image: studentsCornerBox,
  },
];

const HomeBox = () => {
  return (
    <div className='home-box'>
      {boxes.map((box) => (
        <HomeBoxModule key={box.id} boxItem={box} />
      ))}
    </div>
  );
};

export default HomeBox;
