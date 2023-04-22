import React from "react";
import { Navbar, Nav } from "react-bootstrap";

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
      <Nav.Link href="#">
        <img src="images/logo.png" alt=""/>
      </Nav.Link>
    </Navbar>
  );
}

export default NavigationBar;
