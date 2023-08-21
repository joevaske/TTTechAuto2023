import React from 'react';
import './WhatYouWillFind.scss';

import { FaCheck } from 'react-icons/fa';

const whatYouWillFindList = [
  {
    id: 1,
    title:
      'Have a real impact - turn your ideas into reality from day one and integrate your work into the products of world leading companies',
  },
  {
    id: 2,
    title: 'Flexible working conditions - flexible working hours, remote work',
  },
  {
    id: 3,
    title:
      'We are a passionate team – we have open door policy, transpatent communication',
  },
  {
    id: 4,
    title:
      'We stay connected as a team - trough team building activities, corporate events, sport activities, fun room',
  },
  {
    id: 5,
    title:
      'Professional training and development program – we provide technical and soft skill trainings, licence for e-learning platforms ( Udemy ), professional library, English language courses',
  },
  {
    id: 6,
    title: 'Comprehensive onboarding program',
  },
  {
    id: 7,
    title:
      "Family policy –includes bonuses and gifts for new-borns, Family day, New Year's kids program, Theatre tickets",
  },
  {
    id: 8,
    title: 'Additional budget for equipment',
  },
  {
    id: 9,
    title:
      'Healthcare program - private health insurance and annual physical exam',
  },
  {
    id: 10,
    title:
      'Discounts at local shopsDiversity - 2,300 people from 60 countries, speaking 100 different languages',
  },
];

const WhatYouWillFind = () => {
  return (
    <div className='what-you-will-find' id='what-we-offer'>
      {/*  <div className='what-you-will-find__heading'>
        <h2 className='what-you-will-find__heading__title title-blue'>
          What you will find
        </h2>
      </div> */}
      <ul className='what-you-will-find__list'>
        {whatYouWillFindList.map((list) => (
          <li key={list.id}>
            <FaCheck className='what-you-will-find__list__icon' />{' '}
            <span>{list.title}</span>
          </li>
        ))}
      </ul>
      {/*   <div className='what-you-will-find__button'>
        <Link className='button-blue' to='/contact-and-location'>
          Contact us
        </Link>
      </div> */}
    </div>
  );
};

export default WhatYouWillFind;
