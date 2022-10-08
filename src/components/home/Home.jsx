import React from 'react'
import './home.css'
import CallToAction from './CallToAction'
import ME from '../../assets/girl.png'
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

        {/* apply text-light css class to h5 (Emmet shortcut: h5.text_light + ENTER) */}
        <h5 className="text-light"> Lorem Ipsum </h5>
        <CallToAction />

        <Socials />

        {/* Home page image */}
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        {/* scroll down to contact page when clicked */}
        <a href="#contact" className='scroll_down'>Scroll To Bottom</a>



      </div>

    </header>

    
  )
}

export default Home