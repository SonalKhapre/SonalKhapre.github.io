import React from 'react'
import './about.css'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {BiLogoReact} from 'react-icons/bi'
import {FiSettings} from 'react-icons/fi'
import {IoLogoJavascript} from 'react-icons/io'
import {DiNpm} from 'react-icons/di'
import {BsGit} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {GoCommandPalette} from 'react-icons/go'
import {BiLogoJquery} from 'react-icons/bi'
import {TbBrandVscode} from 'react-icons/tb'
import {SiBootstrap} from 'react-icons/si'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          {/* //img */}
        </div>
        <div className='about__content'>
        <p>I am a skilled and passionate web developer, dedicated to crafting exceptional user experiences through the power of web technology. I create responsive, visually appealing and user-friendly websites. I love exploring and creating. I am a lifelong learner.</p>
        </div>
        <div className='skills'>
         <span className='spann'>MY SKILLS</span>
         <div className='iconns'>
         <i><AiFillHtml5/></i><i><IoLogoJavascript/></i><i><DiCss3/></i><i><BiLogoReact/></i><i><FiSettings/></i><i><DiNpm/></i>    <i><BsGit/> </i>   <i><AiFillGithub/></i><i><GoCommandPalette/></i><i><BiLogoJquery/></i><i> <TbBrandVscode/></i><i><SiBootstrap/></i>
          </div>
          </div>
          <div className='btnContainer'>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
      </div>
    </section>
  )
}

export default about