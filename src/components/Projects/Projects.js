import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import projects from './myprojects';

import './Projects.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  };

  return (
    <div id="projects" className="Projects">
      <Row>
        <Col>
          <h1 className="projects-headline text-center my-5">Projects (Swipe Right)</h1>
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index}>
                <img
                  className="d-block w-100"
                  src={project.image}
                  alt={project.title}
                />
                <div className="carousel-text">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <h4>Tech Stack</h4>
                  <ul>
                    {project.stack.map( (technology, idx) => (
                      <li>{technology}</li>
                    ))}
                  </ul>
                  <a href={project.link} className="btn btn-success" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
    </div>
  );
};

export default Projects;