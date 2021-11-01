import React from 'react';
import schoolOfElectricalEngineeringImage from '../../images/home-box/students-corner.webp';
import PageIntro from '../page-intro/PageIntro';
import etfImg from '../../images/faculty/etf.png';
import matematickiImg from '../../images/faculty/matematicki.png';

const schoolOfElectricalEngineeringData = {
  title: 'School of Electrical Engineering <br /> <br />Faculty of Mathematics',
  image: schoolOfElectricalEngineeringImage,
};

const SchoolOfElectricalEngineering = () => {
  return (
    <div className='school-of-electrical-engineering'>
      <PageIntro pageIntro={schoolOfElectricalEngineeringData} />
      <div className='container'>
        <div className='faculty-logo-container'>
          <div className='faculty-logo'>
            <img src={etfImg} alt='School of Electrical Engineering' />
          </div>{' '}
          <div className='faculty-logo'>
            <img src={matematickiImg} alt='Faculty of Mathematics' />
          </div>{' '}
        </div>
        <h3 className='blog-heading'>Scholarships and Internships</h3>
        <span className='page-title-decoration'></span>
        <p className='blog-text'>
          U saradnji sa Elektrotehničkim i Matematičkim fakultetom u Beogradu,
          nudimo mogućnost stipendirane izrade MSc ili BSc rada.
        </p>
        <p className='blog-text'>
          <strong>Kome je namenjena stipendija?</strong>
        </p>
        <p className='blog-text'>
          Program studentske stipendije je namenjen studentima završnih godina
          osnovnih i master studija na ETF-u i MATF-u koji nisu pre apliciranja
          za program odabrali temu za BSc ili MSc rad.{' '}
        </p>
        <p className='blog-text'>Benefiti RT-RK stipendijskog programa: </p>
        <ul className='blog-list'>
          <li>Izrada diplomskog rada uz podršku inženjera mentora</li>
          <li>Mogućnost korišćenja savremene opreme i alata</li>
          <li>Mogućnost profesionalnog i akademskog razvoja</li>
          <li>Stipendija</li>
          <li>Mogućnost pohađanja interno organizovanih stručnih kurseva</li>
          <li>
            Moderno opremljeno okruženje sa prostorijama za odmor i zabavu
          </li>
          <li>Organizovana druženja i sportske aktivnosti</li>
        </ul>
        <p className='blog-text'>Konkurs je otvoren tokom cele godine. </p>
        <p className='blog-text'>
          {' '}
          Za više informacija o ovom programu kontaktirajte nas na{' '}
          <a href='mailto:diplomski@rt-rk.com'>diplomski@rt-rk.com</a>.
        </p>
      </div>
      <div className='container'>
        {' '}
        <h3 className='blog-heading'>Events</h3>
        <span className='page-title-decoration'></span>
        <ul className='blog-list'>
          <li>Summer School</li>
        </ul>
      </div>
      <div className='container'>
        {' '}
        <h3 className='blog-heading'>Where to meet</h3>
        <span className='page-title-decoration'></span>
        <p className='blog-text'>
          Tradicionalno učestvujemo na sajmu studentskih poslova i praksi Job
          Fair, koji se organizuje svakog novembra na tehničkim fakultetima.
          Pozivamo vas da na sajmu posetite naš stand i saznate više o kompaniji
          i opcijama za studente i diplomce. Svakog proleća, jedna sreda popodne
          je rezervisana za Dan otvorenih vrata za studente, gde im prikazujemo
          zanimljive prezentacije vezane za naše najnovije projekte iz
          različitih obolasti. To je mesto gde mogu upoznati naše inženjere i
          neformalno razgovarati o svemu što ih zanima.
        </p>
        <ul className='blog-list'>
          <li>Job Fair</li>
          <li>Open Day </li>
          <li>ITkonekt</li>
        </ul>
      </div>
    </div>
  );
};

export default SchoolOfElectricalEngineering;
