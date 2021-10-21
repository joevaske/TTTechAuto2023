import React from 'react';

import contactAndLocationsImage from '../../images/home-box/contact-and-location.webp';
import ContactForm from '../contact-form/ContactForm';
import Contacts from '../contacts/Contacts';
import PageIntro from '../page-intro/PageIntro';

const contactAndLocationsData = {
  title: 'Contact and locations',
  image: contactAndLocationsImage,
};

const ContactAndLocations = () => {
  return (
    <div className='contact-and-locations'>
      <PageIntro pageIntro={contactAndLocationsData} />
      <Contacts />
      <ContactForm />
    </div>
  );
};

export default ContactAndLocations;
