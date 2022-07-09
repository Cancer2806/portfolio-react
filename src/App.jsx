import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects1 from './components/Projects1';
import Resume from './components/Resume';
import Footer from './components/Footer'
import logo from './logo.svg';
import './reset.css';
import './App.css';


function App() {
  return (
    <body>
      <Header />
      <Hero />
      
      <main>
        <About />
        <Projects1 />
        <Contact />
        <Resume />
      </main>
      <Footer />
    </body>
    
    
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
