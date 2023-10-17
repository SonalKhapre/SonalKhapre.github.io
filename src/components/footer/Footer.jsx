import React from 'react'
import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {RiTwitterXLine} from 'react-icons/ri'

const Footer = () => {
  return (
    <footer>
      <a href='_blank' className='footer__logo'>Sonal Khapre</a>

      <ul className='permalinks'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com'><FaFacebookSquare/></a>
        <a href='https://instagram.com'><AiFillInstagram/></a>
        <a href='https://twitter.com'><RiTwitterXLine/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Sonal Khapre. All rights reserved. </small>
      </div>
    </footer>
  
  )
}

export default Footer