import React from 'react'
import resume from '../../assets/SonalResume2024.pdf'

const Cta = () => {
  return (
    <div className='cta'>
        <a href={resume} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default Cta