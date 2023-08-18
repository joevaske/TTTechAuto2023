import React from 'react';
import './StudentsCornerModule.scss';

import nsLogo from '../../images/students-corner/01-ns.png';
import bgLogo from '../../images/students-corner/02-bg.png';
import osLogo from '../../images/students-corner/03-os.png';
import blLogo from '../../images/students-corner/04-bl.png';

const StudentsCornerModule = () => {
  return (
    <div className='students-corner-module'>
      <div className='students-corner-module__heading'>
        {/*   <h2 className='students-corner-module__heading__title'>
          Students' corner
        </h2>
        <span className='page-title-decoration'></span> */}

        {/*    <p>
          TTTech Auto CEE cooperates with universities in Novi Sad, Belgrade,
          Osijek, and Banja Luka, offering student programs in the field of
          autonomous driving, summer schools, scholarships, and internships with
          top industry topics and latest technologies. This cooperation also
          provides means of support to our engineers who balance their
          professional and academic career.
        </p> */}
      </div>
      <div className='students-corner-module__content'>
        <div className='students-corner-module__content__item'>
          <img src={nsLogo} alt='Novi Sad Office' />
          <h3>
            <a
              href='https://tttech-auto.talentlyft.com/blog/novi-sad-office-lS'
              target='_blank'
              rel='noreferrer'
            >
              {' '}
              Novi Sad Office
            </a>
          </h3>
        </div>
        <div className='students-corner-module__content__item'>
          <img src={bgLogo} alt='Belgrade Office' />
          <h3>
            <a
              href='https://tttech-auto.talentlyft.com/blog/belgrade-office-lV'
              target='_blank'
              rel='noreferrer'
            >
              Belgrade Office
            </a>
          </h3>
        </div>
        <div className='students-corner-module__content__item'>
          <img src={osLogo} alt='Osijek Office' />
          <h3>
            <a
              href='https://tttech-auto.talentlyft.com/blog/osijek-office-lU'
              target='_blank'
              rel='noreferrer'
            >
              Osijek Office
            </a>
          </h3>
        </div>
        <div className='students-corner-module__content__item'>
          <img src={blLogo} alt='Banja Luka Office' />
          <h3>
            <a
              href='https://tttech-auto.talentlyft.com/blog/banja-luka-office-lT'
              target='_blank'
              rel='noreferrer'
            >
              Banja Luka Office
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default StudentsCornerModule;
