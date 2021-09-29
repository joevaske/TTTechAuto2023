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
        <h2 className='students-corner-module__heading__title'>
          Students corner
        </h2>
        <span className='page-title-decoration'></span>
      </div>
      <div className='students-corner-module__content'>
        <div className='students-corner-module__content__item'>
          <img src={nsLogo} alt='Novi Sad Office' />
          <h3>
            <a href='https://rt-rk.talentlyft.com/blog/novi-sad-office-S'>
              {' '}
              Novi Sad Office
            </a>
          </h3>
        </div>
        <div className='students-corner-module__content__item'>
          <img src={bgLogo} alt='Belgrade Office' />
          <h3>
            <a href='https://rt-rk.talentlyft.com/blog/belgrade-office-T'>
              Belgrade Office
            </a>
          </h3>
        </div>
        <div className='students-corner-module__content__item'>
          <img src={osLogo} alt='Osijek Office' />
          <h3>
            <a href='https://rt-rk.talentlyft.com/blog/osijek-office-dh'>
              Osijek Office
            </a>
          </h3>
        </div>
        <div className='students-corner-module__content__item'>
          <img src={blLogo} alt='Banja Luka Office' />
          <h3>
            <a href='https://rt-rk.talentlyft.com/blog/banja-luka-office-di'>
              Banja Luka Office
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default StudentsCornerModule;
