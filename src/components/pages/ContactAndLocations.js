import React from 'react';

import contactAndLocationsImage from '../../images/home-box/contact-and-location.webp';
/* import ContactForm from '../contact-form/ContactForm'; */
import Contacts from '../contacts/Contacts';
import PageIntro from '../page-intro/PageIntro';
import Button from '../layout/elements/Button';

const contactAndLocationsData = {
  title: 'Contact and locations',
  image: contactAndLocationsImage,
};

const ContactAndLocations = () => {
  return (
    <div className='contact-and-locations'>
      <PageIntro pageIntro={contactAndLocationsData} />
      <Contacts />
      {/*  <ContactForm /> */}

      <Button
        setClass='button-blue'
        text='Follow us on LinkedIn'
        link='https://www.linkedin.com/company/tttech-auto/'
        target='__blank'
      />
    </div>
  );
};

export default ContactAndLocations;
