import React from 'react';
import { useState } from 'react';

const Contact = ({ onEmail }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    if (!name || !email) {
      alert('Please enter your name and email address')
      return
    }
    // TODO Email Validation
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

      {/* <ul>
        <li><strong>Phone:  </strong>+61 472 808 657</li>
        <li><strong>Email:  </strong>frank.lavery@westnet.com.au</li>
        <li><a href="https://github.com/Cancer2806" target="blank">Github</a></li>
        <li><a href="https://www.linkedin.com/in/frank-lavery-94444239/" target="blank">LinkedIn</a></li>
      </ul> */}
    </section>
  )
}

export default Contact