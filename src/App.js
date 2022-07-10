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
  );
}

export default App;
