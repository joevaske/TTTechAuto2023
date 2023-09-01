import React from 'react';
import parse from 'html-react-parser';
import './WhatYouWillFind.scss';

import { FaCheck } from 'react-icons/fa';

const whatYouWillFindList = [
  {
    id: 1,
    title:
      'Have a real impact <span>turn your ideas into reality from day one and integrate your work into the products of world leading companies</span>',
  },
  {
    id: 2,
    title:
      'Flexible working conditions <span>flexible working hours, remote work</span>',
  },
  {
    id: 3,
    title:
      'We are a passionate team <span>we have open door policy, transpatent communication</span>',
  },
  {
    id: 4,
    title:
      'We stay connected as a team <span>trough team building activities, corporate events, sport activities, fun room</span>',
  },
  {
    id: 5,
    title:
      'Professional training and development program <span>we provide technical and soft skill trainings, licence for e-learning platforms ( Udemy ), professional library, English language courses</span>',
  },
  {
    id: 6,
    title:
      'Comprehensive onboarding program <span>Guidance in acclimation to our workplace culture and customized inhouse training program for technical onboard </span> ',
  },
  {
    id: 7,
    title:
      "Family policy <span>includes bonuses and gifts for new-borns, Family day, New Year's kids program, Theatre tickets</span>",
  },
  {
    id: 8,
    title:
      'Additional budget for equipment <span>Choose equipment and make more comfortable work place </span>',
  },
  {
    id: 9,
    title:
      'Healthcare program <span>private health insurance and annual physical exam</span>',
  },
  {
    id: 10,
    title:
      'Discount at local shops<span>Diversity of discount, Fitpass discount</span>',
  },
  {
    id: 11,
    title:
      'Diversity<span>2,300 people from 60 countries, speaking 100 different languages</span>',
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
            <h3>{parse(list.title)}</h3>
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
