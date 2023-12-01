import React, { Fragment } from 'react'
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
    <Header/>
    <Skills/>
    <Projects/>
    <AboutMe/>
    <ContactMe/>
    <Footer/>
    </Fragment>
  );
}

export default App;
