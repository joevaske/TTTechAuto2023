import React from 'react';
import PageIntro from '../page-intro/PageIntro';
import careerOpportunitiesImage from '../../images/home-box/be-part-of-us-8.jpg';

import AboutUs from '../about-us/AboutUs';
import PageHeading from '../layout/PageHeading';
import JobList from '../job-list/JobList';

const careerOpportunitiesData = {
  title: 'Career Opportunities',
  image: careerOpportunitiesImage,
};

const CareerOpportunitites = () => {
  const lang = 'en-RS';
  document.documentElement.lang = lang;
  return (
    <div className='career-opportunities'>
      <PageIntro pageIntro={careerOpportunitiesData} />
      <PageHeading title='Jobs' />
      <JobList />
    </div>
  );
};

export default CareerOpportunitites;
