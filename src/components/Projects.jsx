import React from 'react'

const Projects = () => {
  return (
    <section id="work">
      <h2>Work</h2>
      {/* add project cards whenever a good opportunity presents */}
      <article className="projects">
        <a className="projcard mainproject" href="https://bookboardsite.herokuapp.com/" target="blank">
          <article className="cardtitle">
            <h3>Bookboard</h3>
            <p>Collaborative project. Provides a market place for Users to share original content</p>
          </article>
          <figure className="projpic">
            <img src="./assets/images/Screenshot_Launch.png" alt="Bookboard Launch Screen" title="Bookboard" />
            <figcaption className="caption">Launch Screen</figcaption>
          </figure>
        </a>
        
        <a className="projcard" href="https://cancer2806.github.io/City-Guide-group-proj1-/" target="blank">
          <article className="cardtitle">
            <h3>City Guide</h3>
            <p>Team project. User selects a city and is provided with information about the city and things to do while they there</p>
          </article>
          <figure className="projpic">
            <img src="./assets/images/CitySelect.png" alt="City Guide Screen" title="City Guide"/>
            <figcaption className="caption">City Guide Screenshot</figcaption>
          </figure>
        </a>

        <a className="projcard" href="https://github.com/Cancer2806/TechBlog" target="blank">
          <article className="cardtitle">
            <h3>Tech Blog</h3>
            <p>Provides a place where Users can share and comment on Blog entries</p>
          </article>
          <figure className="projpic">
            <img src="./assets/images/ViewVBlogLoggedIn.png" alt="Bookboard Launch" title="Tech Blog"/>
            <figcaption className="caption">View a Blog Entry</figcaption>
          </figure>
        </a>

        <a className="projcard" href="https://drive.google.com/file/d/1RxJMRkA038veYHLueH4sVBAzuk4PUm8r/view?usp=sharing" target="blank">
          <article className="cardtitle">
            <h3>eCommerce Backend</h3>
            <p>Provides the backend access to a mysql database, including creating and seeding of the database</p>
          </article>
          <figure className="projpic">
            <img src="./assets/images/eCommerceViewProducts.png" alt="View Products" title="eCommerce Backend"/>
            <figcaption className="caption">eCommerce Backend:  View Products</figcaption>
          </figure>
        </a>

        <a className="projcard" href="https://drive.google.com/file/d/1w6b3L6KUtBGvBlQDnSrCKrh7tUpjXD4J/view?usp=sharing" target="blank">
          <article className="cardtitle">
            <h3>SQL Employee Tracker</h3>
            <p>The application provides access to an SQL employee database via the terminal CLI.</p>
          </article>
          <figure className="projpic">
            <img src="./assets/images/ViewEmployees.png" alt="View Employees" title="Employee Tracker"/>
            <figcaption className="caption">View Employees (SQL Database)</figcaption>
          </figure>
        </a> 

        <a className="projcard" href="https://notetaker021.herokuapp.com/" target="blank">
          <article className="cardtitle">
            <h3>Note Taker</h3>
            <p>The application allows a User to write and save notes so that they can keep track of tasks and thoughts</p>
          </article>
          <figure className="projpic">
            <img src="./assets/images/NoteTakerEntry.png" alt="View and Enter Notes" title="Note Taker Main Screen"/>
            <figcaption className="caption">Note Taker Main Screen</figcaption>
          </figure>
        </a> 

        <a className="projcard" href="https://cancer2806.github.io/Weather-Guide/" target="blank">
          <article className="cardtitle">
            <h3>Weather Dashboard</h3>
            <p>Obtains weather information about the selected city via API and presents to the User</p>
          </article>
          <figure className="projpic">
            <img src="./assets/images/WeatherDashboardScreenshot_2.png" alt="Weather Dashboard" title="Weather Dashboard"/>
            <figcaption className="caption">Weather Forecast</figcaption>
          </figure>
        </a>

        <a className="projcard" href="https://cancer2806.github.io/Code-Quiz/" target="blank">
          <article className="cardtitle">
            <h3>JavaScript Quiz</h3>
            <p>Timed JS Quiz with scores stored locally</p>
          </article>
          <figure className="projpic">
            <img src="./assets/images/QuestionScreen.png" alt="JS Quiz Screenshot" title="JS Quiz"/>
            <figcaption className="caption">JS Quiz Question page</figcaption>
          </figure>
        </a>
        
        <a className="projcard" href="https://cancer2806.github.io/Day-Planner/" target="blank">
          <article className="cardtitle">
            <h3>Daily Planner</h3>
            <p>Provides a simple To Do list to plan your Day.  Uses local storage so that list items persist until cleared</p>
          </article>
          <figure className="projpic">
            <img src="./assets/images/OpeningPage.png" alt="Daily Planner"
              title="Daily Planner"/>
            <figcaption className="caption">Daily Planner</figcaption>
          </figure>
        </a> 

        <a className="projcard" href="https://cancer2806.github.io/Password-Generator/" target="blank">
          <article className="cardtitle">
            <h3>Passsword Generator</h3>
            <p>Generates a secure password bounded by the parameters provided</p>
          </article>
          <figure className="projpic">
            <img src="./assets/images/PasswordGeneratorScreenshot.png" alt="Password Generator Screenshot" title="Password Generator"/>
            <figcaption className="caption">Password Generator</figcaption>
          </figure>
        </a> 
      </article>
    </section>
  )
}

export default Projects