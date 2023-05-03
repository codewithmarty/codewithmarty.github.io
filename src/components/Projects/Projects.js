import React from "react";
import "./Projects.css";
import projects from './myprojects'

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <h2>Projects</h2>
      <div className="cards-container">
        {projects.map((project) => (
          <div key={project.id} className="card" style={{backgroundColor: "rgb(28, 28, 28)", border: "1px solid beige"}}>
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
              <a href={project.link}>View Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
