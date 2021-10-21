import React from 'react';
import facultyOfElectricalEngineeringImage from '../../images/home-box/students-corner.webp';
import PageIntro from '../page-intro/PageIntro';
import feritOs from '../../images/faculty/ferit.png';

const facultyOfElectricalEngineeringData = {
  title:
    'Faculty of Electrical Engineering, Computer Science and Information Technology',
  image: facultyOfElectricalEngineeringImage,
};

const FacultyOfElectricalEngineering = () => {
  return (
    <div className='faculty-of-electrical-engineering'>
      <PageIntro pageIntro={facultyOfElectricalEngineeringData} />

      <div className='container'>
        <div className='faculty-logo'>
          <img src={feritOs} />
        </div>{' '}
        <h3 className='blog-heading'>Study Programme</h3>
        <span className='page-title-decoration'></span>
        <p className='blog-text'>
          U Osijeku sarađujemo sa Fakultet elektronike, računarstva i
          informacijskih tehnologija (FERIT).{' '}
        </p>
        <p className='blog-text'>
          Na FERIT-u postoji studijski program pod nazivom Master of Automotive
          Computing and Communications. Za više detalja, pogledajte
          <a href='https://autocom.ferit.hr/programme/' target='_blank'>
            https://autocom.ferit.hr/programme/
          </a>
        </p>
      </div>
      <div className='container'>
        {' '}
        <h3 className='blog-heading'>Scholarships and Internships</h3>
        <span className='page-title-decoration'></span>
      </div>
      <div className='container'>
        {' '}
        <h3 className='blog-heading'>Events</h3>
        <span className='page-title-decoration'></span>
        <ul className='blog-list'>
          <li>Open Day</li>
        </ul>
      </div>
      <div className='container'>
        {' '}
        <h3 className='blog-heading'>Where to meet</h3>
        <span className='page-title-decoration'></span>
      </div>
    </div>
  );
};

export default FacultyOfElectricalEngineering;
