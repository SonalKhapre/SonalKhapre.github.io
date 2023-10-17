import React from 'react'
import './nav.css'
import {TiHomeOutline} from 'react-icons/ti'
import {CgGirl} from 'react-icons/cg'
import {GoProjectRoadmap} from 'react-icons/go'
import {AiOutlineMessage} from 'react-icons/ai'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
   <nav>
    <a href='#home' onClick={()=> setActiveNav('#')} className={activeNav==='#'  ? 'active' : ''}><TiHomeOutline/></a>
    <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav==='#about'  ? 'active' : ''}><CgGirl/></a>
    <a href='#portfolio' onClick={()=> setActiveNav('#portfolio')} className={activeNav==='#portfolio'  ? 'active' : ''}><GoProjectRoadmap/></a>
    <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav==='#contact'  ? 'active' : ''}><AiOutlineMessage/></a>
   </nav>
  )
}

export default Nav
