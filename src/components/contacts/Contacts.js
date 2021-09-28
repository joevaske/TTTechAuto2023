import React from 'react';
import './Contacts.scss';
import Contact from './Contact';

import serbiaFlag from '../../images/contacts/serbia.png';
import croatiaFlag from '../../images/contacts/croatia.jpg';
import bosniaFlag from '../../images/contacts/bosnia.jpg';

const contactsData = [
  {
    id: 1,
    flag: serbiaFlag,
    country: 'Serbia',
    title: 'TTTech Auto DOO Novi Sad',
    location: 'Narodnog fronta 23 F-G, Novi Sad, Serbia',
    telephone: '+381 (0)21 4801 100',
    email: 'office@tttech.co.rs',
  },
  {
    id: 2,
    flag: croatiaFlag,
    country: 'Osijek',
    title: 'TTTech Auto Osijek',
    location: 'Narodnog fronta 23 F-G, Novi Sad, Serbia',
    telephone: '+381 (0)21 4801 100',
    email: 'office@tttech.co.rs',
  },
  {
    id: 3,
    flag: serbiaFlag,
    country: 'Belgrade',
    title: 'TTTech Auto Belgrade',
    location: 'Narodnog fronta 23 F-G, Novi Sad, Serbia',
    telephone: '+381 (0)21 4801 100',
    email: 'office@tttech.co.rs',
  },
  {
    id: 4,
    flag: bosniaFlag,
    country: 'Banja Luka',
    title: 'TTTech Auto Banja Luka',
    location: 'Narodnog fronta 23 F-G, Novi Sad, Serbia',
    telephone: '+381 (0)21 4801 100',
    email: 'office@tttech.co.rs',
  },
];

const Contacts = () => {
  return (
    <div className='contacts'>
      <div className='contacts__heading'>
        <h2 className='contacts__heading__title'>TTTech Auto</h2>
        <span className='page-title-decoration'></span>
      </div>
      <div className='contacts__body'>
        <Contact contactData={contactsData} />
      </div>
    </div>
  );
};

export default Contacts;
