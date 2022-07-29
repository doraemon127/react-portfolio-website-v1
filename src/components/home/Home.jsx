import React from 'react'
import './home.css'
import CallToAction from './CallToAction'
import ME from '../../assets/me.png'
import Socials from './Socials'

const Home = () => {
  return (
    <header>

      {
      /* 
       * container refers to general class in index.css
       * home_container is specific to Home page component
       * Emmet shortcut: container.home_container + ENTER
       */
      }
      <div className="container home_container">
        <h5> Hello 👋    I am </h5>
        <h1> Aammya Sapra </h1>

        {/* h5 with a class of text-light (Emmet shortcut: h5.text_light + ENTER) */}
        <h5 className="text-light"> add text here </h5>
        <CallToAction />

        <Socials />

        {/* Home page image */}
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll_dowm'>Scroll Down</a>



      </div>

    </header>

    
  )
}

export default Home