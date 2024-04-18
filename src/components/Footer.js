import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a href="https://www.instagram.com/your_account">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.twitter.com/your_account">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.facebook.com/your_account">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
      <p>&copy; 2024 beastboyskate.com</p>
    </div>
  );
}

export default Footer;
