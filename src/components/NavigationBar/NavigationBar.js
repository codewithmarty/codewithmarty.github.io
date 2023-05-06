import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

import './NavigationBar.css'

const NavigationBar = () => {
  return (
    <Navbar expand="md">
      {/* <Navbar.Brand href="#">My App</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <a href="resume/marty_resume_2023.pdf" download>
          <FontAwesomeIcon icon={faFileAlt} size="3x" style={{ color: 'white'}}/>
        </a>
        <img src="images/logo.png" alt=""/>
      </div>
    </Navbar>
  );
}

export default NavigationBar;
