import React from 'react';
import './AboutUsIntro.scss';

/* import InitiativeImg from '../../images/about-us/initiative.png';
 */ import TeamWorkImg from '../../images/about-us/team-work.png';
import TechnicalKnowledgeImg from '../../images/about-us/technical-knowledge.png';
import AnalyticalThinkingImg from '../../images/about-us/analyticalthinking.png';
import PageHeading from '../layout/PageHeading';

const AboutUsIntro = () => {
  return (
    <div className='about-us-intro'>
      {/* <h2 className='about-us-intro__title'>What defines us better</h2> */}
      <PageHeading title='What defines us better' />
      {/* <span className='about-us-intro__title__decoration'></span> */}
      <div className='modules-wrap'>
        <div className='about-us-intro__modul'>
          <img
            className='about-us-intro__modul__image'
            src={TechnicalKnowledgeImg}
            alt='TTTech Auto: Initiative'
          />
          <h3 className='about-us-intro__modul__heading'>Passionate</h3>
        </div>
        <div className='about-us-intro__modul'>
          <img
            className='about-us-intro__modul__image'
            src={AnalyticalThinkingImg}
            alt='TTTech Auto: Team Work'
          />
          <h3 className='about-us-intro__modul__heading'>Impactful</h3>
        </div>
        <div className='about-us-intro__modul'>
          <img
            className='about-us-intro__modul__image'
            src={TeamWorkImg}
            alt='TTTech Auto: Technical Knowledge'
          />
          <h3 className='about-us-intro__modul__heading'>Together</h3>
        </div>
        {/* <div className='about-us-intro__modul'>
          <img
            className='about-us-intro__modul__image'
            src={AnalyticalThinkingImg}
            alt='TTTech Auto: Analytical Thinking'
          />
          <h3 className='about-us-intro__modul__heading'>
            Analytical Thinking
          </h3>
        </div> */}
      </div>
    </div>
  );
};

export default AboutUsIntro;
