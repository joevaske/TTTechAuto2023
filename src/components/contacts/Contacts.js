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
    country: 'Novi Sad',
    title: 'TTTech Auto DOO Novi Sad',
    location: 'Narodnog fronta 23 F-G, Novi Sad, Serbia',
    telephone: '+381 (0)21 4801 200',
    email: 'office.srb@tttech-auto.com',
  },
  {
    id: 2,
    flag: croatiaFlag,
    country: 'Osijek',
    title: 'TTTech Auto DOO',
    location: 'Cara Hadrijana 10b, Osijek, Croatia',
    telephone: '+385 (0)95 563 63 58',
    email: 'office.cro@tttech-auto.com',
  },
  {
    id: 3,
    flag: serbiaFlag,
    country: 'Belgrade',
    title: 'TTTech Auto DOO Novi Sad',
    location: 'Dunavska 2v, Belgrade, Serbia',
    telephone: '+381 (0)21 4801 121',
    email: 'office.srb@tttech-auto.com',
  },
  {
    id: 4,
    flag: bosniaFlag,
    country: 'Banja Luka',
    title: 'TTTech Auto DOO Banja Luka',
    location: 'Jovana Dučića 23a, Banjaluka, Bosnia & Herzegovina',
    telephone: '381 (0)21 483 1323',
    email: 'office.bih@tttech-auto.com',
  },
];

const Contacts = () => {
  return (
    <div className='contacts'>
      <div className='contacts__heading'>
        <h2 className='contacts__heading__title'>TTTech Auto CEE</h2>
        <span className='page-title-decoration'></span>
      </div>
      <div className='contacts__body'>
        <Contact contactData={contactsData} />
      </div>
    </div>
  );
};

export default Contacts;
