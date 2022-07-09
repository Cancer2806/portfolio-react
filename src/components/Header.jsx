import React from 'react'

const Navbar = () => {
  return (
    // Title Header and Navigation bar
    <header>
      <h1>Frank Lavery</h1>
      <nav>
        <ul>
          <li><a href="#aboutme">About Me</a></li>
          <li><a href="#work">Portfolio</a></li>
          {/* <li><link to="/work">Portfolio</link></li> */}
          <li><a href="#contact">Contact Me</a></li>
          <li><a href="#resume">Resume</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar