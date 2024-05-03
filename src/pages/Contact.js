import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import contactImg from '../images/contactImg.jpg';
import '../styles/Contact.css';

function Contact() {
  const formRef = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_hm1ouxt', 'template_zukg4i1', formRef.current, 'cmnp_z7hvQERzhs1s')
      .then((result) => {
        console.log(result.text);
        
      }, (error) => {
        console.log(error.text);
        
      });
  }

  return (
    <div className='contact'>
      <div className='leftSide' style={{ backgroundImage: `url(${contactImg})`}}></div>
      <div className='rightSide'>
        <h1>Contact Us</h1>
        <form id='contact-form' ref={formRef} onSubmit={sendEmail}>
          <label htmlFor='name'>Full Name</label>
          <input name='name' placeholder='Enter Full Name' type='text'/>

          <label htmlFor='email'>Email</label>
          <input name='email' placeholder='Enter Email' type='email'/>

          <label htmlFor='message'>Message</label>
          <textarea rows="6" placeholder='Enter Message' name='message' required></textarea>

          <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
