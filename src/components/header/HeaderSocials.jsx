import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaSquareXTwitter} from 'react-icons/fa6'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    <a href='https://www.linkedin.com/in/sonal-khapre-8509a5216/' target='_blank' rel="noreferrer"><BsLinkedin/></a>
    <a href='https://github.com/SonalKhapre' target='_blank' rel="noreferrer"><FaGithub/></a>
    <a href='https://twitter.com/home' target='_blank' rel="noreferrer"><FaSquareXTwitter/></a>

    </div>
  )
}

export default HeaderSocials