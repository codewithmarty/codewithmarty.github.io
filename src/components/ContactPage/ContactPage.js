import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faInstagram, 
  faLinkedin,
  faYoutube,
  
} from '@fortawesome/free-brands-svg-icons';

import "./ContactPage.css"

const ContactPage = () => {
  return (
    <div id="contact" className="ContactPage">
      <h1>Connect on Social Media</h1>
      <a className="social-icon ig" href="https://www.instagram.com/obiwannicola" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="4x" />
      </a>
      <a className="social-icon li" href="https://www.linkedin.com/in/martinnicola" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="4x" />
      </a>
      <a className="social-icon yt" href="https://www.youtube.com/watch?v=hlfLySVnB_0" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faYoutube} size="4x" />
      </a>
    </div>
  );
};

export default ContactPage;
