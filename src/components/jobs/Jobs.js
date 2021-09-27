import React from 'react';
import { Link } from 'react-router-dom';
import './Jobs.scss';
const Jobs = () => {
  return (
    <div className='jobs'>
      <div className='jobs__heading'>
        <h2 className='jobs__heading__title'>Jobs</h2>
        <span className='page-title-decoration'></span>
      </div>
      <div className='jobs__button'>
        {/* <Link className='button-blue' to='/contact-and-location'>
          Join us
        </Link> */}
        <a className='button-blue' href='https://rt-rk.talentlyft.com/'>
          Join us
        </a>
      </div>
    </div>
  );
};

export default Jobs;
