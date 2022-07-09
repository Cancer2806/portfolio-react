import React from 'react'
import Prof1 from '../assets/images/Prof1.png'

const About = () => {
  return (
    <section id="aboutme">
      <h2>About Me</h2>
      <div id="container">
        <img
          src={Prof1} alt="Owner's Profile"
        />
      <p>Amongst other things, I enjoy travelling and producing items with a purpose.  I pursued my interests in computers and my desire to create worthwhile things by enrolling in the Full Stack Web Developers Bootcamp.  I am looking forward to further building a career in web development through the creation of products that will make the World a better place, even if only in a small way.</p>
      </div>
    </section>
  )
}

export default About