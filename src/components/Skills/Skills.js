import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import skills from './myskills.js';

import "./Skills.css"

const Skills = () => {
  return (
    <div id="skills" className="Skills container-fluid">
      <h1 className="text-center mb-5 my-5">Skills</h1>
      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill" key={skill.name}>
            <FontAwesomeIcon icon={skill.icon} size="4x" />
            <p className="mt-3">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
