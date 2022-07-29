import React from 'react'
import Home from './components/home/Home.jsx'
import Nav from './components/nav/Nav.jsx'
import About from './components/about/About.jsx'
import Experience from './components/experience/Experience.jsx'
import Projects from './components/projects/Projects.jsx'
import Skills from './components/skills/Skills.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'

const App = () => {
  return (
    
    /* wrap App component inside React fragment */
    <>

      {/* create page components in order of pages on website */}
      <Home />
      <Nav />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />


    </>
  )
}

export default App