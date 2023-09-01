import React, { Fragment } from 'react';
import HomeBoxModule from './HomeBoxModule';
import './HomeBox.scss';

import aboutUsBox from '../../images/home-box/new/about-us.webp';
import studentsCornerBox from '../../images/home-box/new/students-corner.webp';
import ourTeamBox from '../../images/home-box/new/our-team.webp';
import whatWeOfferBox from '../../images/home-box/new/what-we-offer.webp';
/* import PageHeading from '../layout/PageHeading';
 */
const boxes = [
  {
    id: 1,
    title: 'What we do',
    text: 'Learn more about what we do at TTTech Auto CEE',
    url: 'about-us',
    image: aboutUsBox,
  },
  {
    id: 2,
    title: 'Students corner',
    text: 'Learn more about what we do at TTTech Auto CEE',
    url: 'students-corner',
    image: studentsCornerBox,
  },
  {
    id: 3,
    title: 'Our team',
    text: 'Portraits of some of our team members and their narrative about their positions',
    url: '/about-us#our-team',
    image: ourTeamBox,
  },
  {
    id: 4,
    title: 'What we offer',
    text: 'Learn more about benefits of working at TTTech CEE',
    url: '/about-us#what-we-offer',
    image: whatWeOfferBox,
  },
];

const HomeBox = () => {
  return (
    <Fragment>
      <div className='home-box'>
        {boxes.map((box) => (
          <HomeBoxModule key={box.id} boxItem={box} />
        ))}
      </div>
    </Fragment>
  );
};

export default HomeBox;
