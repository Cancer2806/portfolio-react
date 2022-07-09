import React from 'react';
import { projectdata } from './ProjectData';
// import { images } from '../assets/images';


const Projects = () => {
  return (
    <section id="work">
      <h2>Projects</h2>
      {/* add project cards whenever a good opportunity presents */}
      <article className="projects">
        {projectdata.map((project) =>
          <a className="projcard" href={project.deployed} target="blank">
            <article className="cardtitle">
              <h3>{project.title}</h3>
              <p>{ project.description}</p>
            </article>
            <figure className="projpic">
              <img alt={project.alt} title={project.title} src={require(`${project.image}`)} />
              <figcaption className="caption">{ project.caption}</figcaption>
            </figure>
          </a>
        )}
      </article>
    </section>
  )
}

export default Projects