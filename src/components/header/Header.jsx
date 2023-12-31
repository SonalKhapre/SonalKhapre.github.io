import React from 'react'
import './header.css'
import Cta from './CTA'
import HeaderSocials from './HeaderSocials'
import sona from '../../assets/ME.jpeg'

const Header = () => {
  return (
    <header id='home'>
      <div className='container header__container'>
      <h5>Hello I'm</h5>
      <h1>Sonal Khapre</h1>
      <h5 className='text-light'>Frontend Developer</h5>    
      <Cta />
      <HeaderSocials />
          <div className='me'>
            <img src={sona} alt='me'></img>
          </div>
          <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  );
}

export default Header