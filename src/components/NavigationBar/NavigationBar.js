import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

import './NavigationBar.css'

const NavigationBar = () => {
  return (
    <Navbar expand="md" style={{position: 'fixed', top: '0', left: '0', zIndex: '1000', width: '100%'}}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#skills">Certifications</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <a className="social-icon li" href="https://www.linkedin.com/in/martinnicola" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="4x" style={{ color: 'white', width: '40px'}} />
        </a>
        <a className="social-icon li" href="https://www.github.com/codewithmarty" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="4x" style={{ color: 'white', width: '40px'}} />
        </a>
        <a href="resume/marty-resume-may-2023.pdf" download>
          <FontAwesomeIcon icon={faFileAlt} size="3x" style={{ color: 'white', width: '30px'}}/>
        </a>
        <img src="images/logo.png" alt=""/>
      </div>
    </Navbar>
  );
}

export default NavigationBar;
