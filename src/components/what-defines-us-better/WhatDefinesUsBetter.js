import React, { Fragment } from 'react';
import './WhatDefinesUsBetter.scss';
import PageHeading from '../layout/PageHeading';

import { HiOutlineLightBulb } from 'react-icons/hi';
import { GiImpactPoint } from 'react-icons/gi';
import { RiTeamFill } from 'react-icons/ri';

const WhatDefinesUsBetter = () => {
  return (
    <Fragment>
      <PageHeading title='What defines us better' />
      <div className='what-defines-us-better'>
        <div className='item item-1'>
          <span>
            <HiOutlineLightBulb />
          </span>
          <h2>PASSIONATE</h2>
        </div>
        <div className='item item-2'>
          <span>
            <GiImpactPoint />
          </span>{' '}
          <h2>IMPACTFUL</h2>
        </div>
        <div className='item item-3'>
          <span>
            <RiTeamFill />{' '}
          </span>
          <h2> TOGETHER</h2>
        </div>
      </div>
    </Fragment>
  );
};

export default WhatDefinesUsBetter;
