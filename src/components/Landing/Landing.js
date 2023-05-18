import React from "react";

import './Landing.css';

const Landing = () => {
  return (
    <div className="Landing">
      <div className="blurb">
        <h1>Hi, I'm Martin</h1>
        <p>I'm an AWS Certified Software Developer who loves <br/> databases, backend, and cloud computing!</p>
      </div>
      <div>
        <img src="images/profile-pic.png" alt="Profile" />
      </div>
    </div>
  );
}

export default Landing;
