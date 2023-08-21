import React from 'react';
import './Contact.scss';
const Contact = ({ contactData }) => {
  return (
    <div className='contact'>
      {contactData.map((data) => (
        <div key={data.id} className='contact__item'>
          {/* <div className='contact__item__country'>
            <div className='contact__item__country__flag'>
              <img src={data.flag} alt={data.country} />
            </div>
            <div className='contact__item__country__name'>{data.country} </div>
          </div> */}
          <div className='contact__item__town-image'>
            <img src={data.img} alt={data.title} />
          </div>
          <div className='contact__item__address'>
            <h2 className='contact__item__address__title'>{data.title}</h2>
            <p className='contact__item__address__location'>{data.location}</p>
            <p className='contact__item__address__telephone'>
              {data.telephone}
            </p>
            <p className='contact__item__address__email'>{data.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contact;
