import React from 'react';
import { Link } from 'react-router-dom';

import './HomeBoxModule.scss';

const HomeBoxModule = ({ boxItem }) => {
  return (
    <div
      className='home-box-module'
      style={{
        backgroundImage: 'url(' + boxItem.image + ')',
        backgroundSize: 'cover',
      }}
    >
      <h2>
        <Link className='home-box-module__link' to={boxItem.url}>
          {boxItem.title}
        </Link>
      </h2>
    </div>
  );
};

export default HomeBoxModule;
