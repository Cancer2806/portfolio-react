import React from 'react';
import { useState } from 'react';
import { validateEmail } from '../utils/helpers';

const Contact = ({ onEmail }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    if (!name || !validateEmail(email)) {
      alert('Please enter your name and valid email address')
      return
    }
    onEmail({ name, email, message })

    // clear the form
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Name</label>
          <input type='text'
            placeholder='Enter your name'
            value={name}
            onChange={(event) => setName(event.target.value)} />
        </div>
        <div className='form-control'>
          <label>Email Address</label>
          <input type='text'
            placeholder='yourname@email.com'
            value={email}
            onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div className='form-control'>
          <label>Message</label>
          <input type='text'
            placeholder='What would you like to ask me'
            value={message}
            onChange={(event) => setMessage(event.target.value)} />
        </div>
        <input type='submit' value='Send' className='btn btn-block' />
      </form>
    </section>
  )
}

export default Contact