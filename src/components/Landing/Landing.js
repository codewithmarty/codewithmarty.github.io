import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import './Landing.css';

const Landing = () => {
  return (
    <div className="Landing">
      <div className="blurb">
        <h1>Hi, I'm Martin</h1>
        <p>I'm a Software Developer who loves <br/> databases, backend, and cloud computing!</p>
        <a href="resume/marty_resume_2023.pdf" download>
          <FontAwesomeIcon icon={faFileAlt} size="3x"/>
          <h5>Download Resume</h5>
        </a>
      </div>
      <div>
        <img src="images/profile-pic.png" alt="Profile" />
      </div>
    </div>
  );
}

export default Landing;
