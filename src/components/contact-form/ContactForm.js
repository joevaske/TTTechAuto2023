import React, { useState } from 'react';
import './ContactForm.scss';

const ContactForm = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div className='contact-form'>
      <form className='form'>
        <div className='form__part'>
          <label className='label'>* Name</label>
          <input type='text' placeholder='' required />
        </div>
        <div className='form__part'>
          <label className='label'> * Mail</label>
          <input type='text' placeholder='' />
        </div>
        <div className='form__part full-row-grid'>
          <label className='label' htmlFor='message'>
            Message
          </label>
          <textarea name='message'></textarea>
        </div>
        <div className='form__part full-row-grid'>
          <input
            type='checkbox'
            id='scales'
            name='scales'
            checked={checked}
            onChange={handleChange}
          />
          <label className='label' htmlFor='scales'>
            {' '}
            *I accept the terms of service
          </label>
        </div>
        <div className='form__part center-grid'>
          <input
            type='submit'
            id='submit'
            value='Send'
            className='button-blue'
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
