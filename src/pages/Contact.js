import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import contactImg from '../images/contactImg.jpg';
import '../styles/Contact.css';

function Contact() {
  const formRef = useRef();
  const [showConfirmation, setShowConfirmation] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_hm1ouxt', 'template_zukg4i1', formRef.current, 'cmnp_z7hvQERzhs1s')
      .then((result) => {
        console.log(result.text);
        setShowConfirmation(true); 
        setTimeout(() => {
          setShowConfirmation(false); 
        }, 2500);
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

          <label htmlFor='project'>Message</label>
          <textarea rows="6" placeholder='Enter Message' name='project' required></textarea>

          <button type='submit' onClick={() => setShowConfirmation(true)}>Send Message</button>
        </form>
        {showConfirmation && <div className="popup">Thank you for the message!</div>}
      </div>
    </div>
  );
}

export default Contact;
