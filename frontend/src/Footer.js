import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <p>&copy; 2023 Insurance Company. All rights reserved.</p>
      <div className="social-icons">
        <a href="#" className="icon">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#" className="icon">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" className="icon">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" className="icon">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
