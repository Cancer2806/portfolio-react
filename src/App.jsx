import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer'
// import logo from './logo.svg';
import './reset.css';
import './App.css';

const getEmail = (emailData) => {
  console.log('now Im here');
  console.log(emailData);
};

function App() {
  return (
    <>
      <Header />
      <Hero />
      
      <main>
        <About />
        <Projects />
        <Contact onEmail={getEmail} />
        <Resume />
      </main>
      <Footer />
    </>
    
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       I'm putting something else in here
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
