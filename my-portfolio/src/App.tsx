import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import IntroduceMyself from './sections/IntroduceMyself';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experiences from './sections/Experiences';
import ContactMe from './sections/ContactMe';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
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
    <>
      <Header />
      <IntroduceMyself />
      <About />
      <Skills />
      <Projects />
      <Experiences />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
