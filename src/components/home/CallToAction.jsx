import React from 'react'
import CV from '../../assets/cv.pdf'
import {BsDownload} from 'react-icons/bs'

const CallToAction = () => {
  return (
    <div className='callToAction'>
      <a href={CV} download className='btn'>Resume <BsDownload className='dlIcon'/></a>
      {/* <a href={CV} download className='btn'>Download Resume</a> */}
      <a href="#contact" className='btn btn-primary'>Contact</a>
    </div>
  )
}

export default CallToAction