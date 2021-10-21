import React from 'react';

import facultyNoviSadImage from '../../images/home-box/students-corner.webp';
import PageIntro from '../page-intro/PageIntro';
import ftnImg from '../../images/faculty/ftn.png';

const facultyNoviSadData = {
  title: 'Faculty of Technical Sciences',
  image: facultyNoviSadImage,
};

const FacultyNoviSad = () => {
  return (
    <div className='faculty-novi-sad'>
      <PageIntro pageIntro={facultyNoviSadData} />

      <div className='container'>
        <div className='faculty-logo'>
          <img src={ftnImg} />
        </div>{' '}
        <h3 className='blog-heading'>Study Programme</h3>
        <span className='page-title-decoration'></span>
      </div>

      <div className='container'>
        <h3 className='blog-heading'>Scholarships and Internships</h3>
        <span className='page-title-decoration'></span>
        <p className='blog-text'>
          U zavisnosti od toga koja ste trenutno godina studija, na kom smeru i
          departmanu Fakulteta tehničkih nauka, nude se različiti programi
          stipendiranja i praksi.{' '}
        </p>
        <p className='blog-text'>
          Za studente koji studiraju na Departmanu za računarstvo i automatiku,
          postoji program stipendiranja već od 2. godine studija. Za više
          informacija možete nas kontaktirati na{' '}
          <a href='mailto:stipendija@rt-rk.com'>stipendija@rt-rk.com</a> .
        </p>
        <p className='blog-text'>
          Ukoliko ste studenti završnih godina na nekom od navedenih smerova:
        </p>
        <ul className='blog-list'>
          <li className=''>
            Računarstvo i automatika (smerovi: Računarska tehnika i računarske
            komunikacije, Automatika i upravljanje sistemima, Primenjene
            računarske nauke i informatika);
          </li>
          <li>Softversko inženjerstvo i informacione tehnologije;</li>
          <li>Telekomunikacije i obrada signala;</li>
          <li>Mikroračunarska elektronika;</li>
          <li>Mehatronika, robotika i automatizacija.</li>
        </ul>
        <p className='blog-text'>
          Organizujemo praksu za diplomce u okviru kompanije, koja studentu
          dodatno omogućava da iz oblasti koju odabere napiše i svoj diplomski
          ili master rad.
        </p>
        <p className='blog-text'>
          Šta pružamo studentima koji se odluče za praksu kod nas?
        </p>
        <ul className='blog-list'>
          <li>Izrada diplomskog rada uz podršku inženjera mentora </li>
          <li>Mogućnost korišćenja savremene opreme i alata</li>
          <li>Mogućnost profesionalnog i akademskog razvoja</li>
          <li>Stipendija</li>
          <li>Mogućnost pohađanja interno organizovanih stručnih kurseva</li>
          <li>
            Moderno opremljeno okruženje sa prostorijama za odmor i zabavu
          </li>
          <li>Organizovana druženja i sportske aktivnosti</li>
        </ul>
        <p className='blog-text'>Konkurs je otvoren tokom cele godine.</p>

        <p className='blog-text'>
          {' '}
          Za više informacija o ovom programu kontaktirajte nas na{' '}
          <a href='mailto:diplomski@rt-rk.com'>diplomski@rt-rk.com</a>.
        </p>
      </div>
      <div className='container'>
        <h3 className='blog-heading'>Events</h3>
        <span className='page-title-decoration'></span>
        <ul className='blog-list'>
          <li>Summer Schools </li>
          <li>Summer Internship</li>
        </ul>
      </div>
      <div className='container'>
        <h3 className='blog-heading'>Where to meet</h3>
        <span className='page-title-decoration'> </span>
        <p className='blog-text'>
          Svake godine u martu učestvujemo u najvećem studentskom sajmu poslova
          i praksi, Konteh-u, koji se organizuje na Fakultetu tehničkih nauka.
          Početkom juna tradicionalno organizujemo Dan otvorenih vrata gde
          studentima predstavljamo mogućnosti unutar kompanije.
        </p>
        <ul className='blog-list'>
          <li>Konteh</li>
          <li>Open Day</li>
        </ul>
      </div>
    </div>
  );
};

export default FacultyNoviSad;
