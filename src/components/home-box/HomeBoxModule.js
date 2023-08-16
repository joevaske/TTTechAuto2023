import React from 'react';
import { Link } from 'react-router-dom';

import './HomeBoxModule.scss';

const HomeBoxModule = ({ boxItem }) => {
  return (
    <div className='home-box-module'>
      <div className='home-box-module__image'>
        <img src={boxItem.image} alt={boxItem.title} />
      </div>
      <div className='home-box-module__text'>
        <h1>{boxItem.title}</h1>
        <p>{boxItem.text}</p>
        <Link className='home-box-module__link' to={boxItem.url}>
          {' '}
          Learn more{' '}
        </Link>
      </div>
    </div>
  );
};

export default HomeBoxModule;
