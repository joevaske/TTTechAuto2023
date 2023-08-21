import React from 'react';
import './Contacts.scss';
import Contact from './Contact';
import PageHeading from '../layout/PageHeading';

import serbiaFlag from '../../images/contacts/serbia.png';
import croatiaFlag from '../../images/contacts/croatia.jpg';
import bosniaFlag from '../../images/contacts/bosnia.jpg';

// images

import noviSadImage from '../../images/contacts/NoviSad.webp';
import belgradeImage from '../../images/contacts/Beograd.webp';
import banjaLukaImage from '../../images/contacts/BanjaLuka.webp';
import osijekImage from '../../images/contacts/Osijek.webp';

const contactsData = [
  {
    id: 1,
    flag: serbiaFlag,
    img: noviSadImage,
    country: 'Novi Sad',
    title: 'TTTech Auto DOO Novi Sad',
    location: 'Narodnog fronta 23 F-G, Novi Sad, Serbia',
    telephone: '+381 (0)21 480 1258',
    email: 'office-srb@tttech-auto.com',
  },
  {
    id: 2,
    flag: croatiaFlag,
    img: osijekImage,
    country: 'Osijek',
    title: 'TTTech Auto d.o.o.',
    location: 'Cara Hadrijana 10b, Osijek, Croatia',
    telephone: '+385 (0)95 563 63 58',
    email: 'office-cro@tttech-auto.com',
  },
  {
    id: 3,
    flag: serbiaFlag,
    img: belgradeImage,
    country: 'Belgrade',
    title: 'TTTech Auto DOO Novi Sad',
    location: 'Dunavska 2v, Belgrade, Serbia',
    telephone: '+381 (0)21 4801 121',
    email: 'office-srb@tttech-auto.com',
  },
  {
    id: 4,
    flag: bosniaFlag,
    img: banjaLukaImage,
    country: 'Banja Luka',
    title: 'TTTech Auto d.o.o. Banja Luka',
    location: 'Jovana Dučića 23a, Banjaluka, Bosnia & Herzegovina',
    telephone: '+387 (0)66 808 554',
    email: 'office-bih@tttech-auto.com',
  },
];

const Contacts = () => {
  return (
    <div className='contacts'>
      <div className='contacts__heading'>
        <PageHeading title='TTTech Auto CEE' />
      </div>
      <div className='contacts__body'>
        <Contact contactData={contactsData} />
      </div>
    </div>
  );
};

export default Contacts;
