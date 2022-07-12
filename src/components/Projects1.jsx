import React from 'react';
import { projectdata } from './ProjectData';
// import { images } from '../assets/images';


const Projects = () => {
  return (
    <section id="work">
      <h2>Portfolio</h2>

      {/* add projects through the ProjectData file whenever a good opportunity presents */}
      {/* Reformat cards to show both Project Title and Github repository */}

      <article className="projects">
        {projectdata.map((project) =>
          
          // change this from a clickable card to a card that has two clickable links - one for deployment and the other for Github

          <a className="projcard" href={project.deployed} target="blank" >
            <article className="cardtitle">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>Source of picture {project.image}</p>
            </article>
            <figure className="projpic" >
             
              <img alt={project.alt} title={project.title} src={`${process.env.PUBLIC_URL}${project.image}`} />

              {/* <img alt={project.alt} title={project.title} src={require('../assets/images/WeatherDashboardScreenshot_2.png')} /> */}

              {/* <img alt={project.alt} title={project.title} src={require(`${project.image}`)} /> */}
              
              <figcaption className="caption">{project.caption}</figcaption>
            </figure>
          </a>
        )}
      </article>
    </section>
  )
}

export default Projects