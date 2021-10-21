import React from 'react';
import facultyOfElectricalEngineeringBlImage from '../../images/home-box/students-corner.webp';
import PageIntro from '../page-intro/PageIntro';
import etfBl from '../../images/faculty/etf_bl.png';

const facultyOfElectricalEngineeringBlData = {
  title: 'Faculty of Electrical Engineering',
  image: facultyOfElectricalEngineeringBlImage,
};

const FacultyOfElectricalEngineeringBl = () => {
  return (
    <div className='faculty-of-electrical-engineering-bl'>
      <PageIntro pageIntro={facultyOfElectricalEngineeringBlData} />
      <div className='container'>
        <div className='faculty-logo'>
          <img src={etfBl} />
        </div>
        <h3 className='blog-heading'>Scholarships and Internships</h3>
        <span className='page-title-decoration'></span>
        <p className='blog-text'>
          U Banjoj Luci kompanija ima dobro razvijen sistem stipendiranja
          studenata Elektrotehničkog fakulteta. Kreiramo različite programe
          obavezujućih i neobavezujućih stipendija kojima stimulišemo školovanje
          studenata zainteresovanih za oblast kojom se kompanija bavi.
        </p>
        <ul className='blog-list'>
          <li>
            Studentima smjera Računarsko inženjerstvo, nudi se program
            neobavezujućih stipendija već od 2. godine studija. Za više
            informacija pišite na{' '}
            <a href='mailto:stipendija@rt-rk.com' target='_blank'>
              stipendija@rt-rk.com
            </a>
            .
          </li>
          <li>
            Za studente 3. i 4 godine studijskog programa Računarstvo i
            informatika nudimo program obavezujućih stipendija. Za više
            informacija pišite na{' '}
            <a href='mailto:diplomski@rt-rk.com' target='_blank'>
              diplomski@rt-rk.com
            </a>
            .
          </li>
        </ul>
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
        <h3 className='blog-heading'>Where to meet</h3>
        <span className='page-title-decoration'></span>
        <p className='blog-text'>
          Svakog proleća organizujemo Dan otvorenih vrata za studente, gde mogu
          prisustvovati zanimljivim prezentacijama o najnovijim radovima na
          projektima u različitim oblastima i upoznati naše inženjere.
        </p>

        <p className='blog-text'>
          Da bismo se predstavili kao potencijalni poslodavac, učestvujemo na
          sajmovima studentskih poslova i praksi. Posetite naš štand i saznajte
          više o kompaniji i ponudama za studente i diplomce.
        </p>

        <ul className='blog-list'>
          <li>Open Day</li>
          <li>Job Fair</li>
        </ul>

        <p className='blog-text'>
          Spremni smo da neprestano poboljšavamo svoju vezu sa studentima i
          potencijalnim zaposlenima, pa imamo mnogo planova za buduće akcije.
          Više informacija o budućim događajima sledi uskoro.
        </p>
      </div>
    </div>
  );
};

export default FacultyOfElectricalEngineeringBl;
