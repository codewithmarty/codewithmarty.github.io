import React from "react";
import "./Projects.css";
import { FaGithub } from 'react-icons/fa';
import projects from './myprojects'

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <h1>Projects</h1>
      <div className="cards-container">
        {projects.map((project) => (
          <div key={project.id} className="card" style={{backgroundColor: "rgb(28, 28, 28)", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)", border: "none"}}>
            <img src={project.image} alt={project.title} />
            <div className="card-details">
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
            <a className="project-link" href={project.link}>View Project on <FaGithub /></a>
            <a className="project-link" href={project.deployed}>Try it out!</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
