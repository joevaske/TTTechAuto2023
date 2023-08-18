import React from 'react';
import { Link } from 'react-router-dom';
import './WhatYouWillFind.scss';

import { FaCheck } from 'react-icons/fa';

const whatYouWillFindList = [
  {
    id: 1,
    title: 'Working with Innovative technology',
  },
  {
    id: 2,
    title: 'Professional Development',
  },
  {
    id: 3,
    title: 'Flexible Hours',
  },
  {
    id: 4,
    title: 'Daily Challenges',
  },
  {
    id: 5,
    title: 'Flexible Remuneration Plan',
  },
  {
    id: 6,
    title: 'Trainings and Technical Onboardings',
  },
  {
    id: 7,
    title: 'Working with an Experienced International Team',
  },
  {
    id: 8,
    title: 'Teambuilding',
  },
  {
    id: 9,
    title: 'Offices with the most up-to-date Technology and Equipment',
  },
  {
    id: 10,
    title: 'Fitness Package',
  },
];

const WhatYouWillFind = () => {
  return (
    <div className='what-you-will-find'>
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
