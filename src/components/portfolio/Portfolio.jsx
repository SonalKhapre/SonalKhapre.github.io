import React from 'react'
import './portfolio.css'
import img1 from '../../assets/ssMovieSearchSmall.png'
import img2 from '../../assets/ssRestaurantFinal.png'
import img3 from '../../assets/ssTextToSpeechFinal.png'
import img4 from '../../assets/ssTicTacToe.png'
import img5 from '../../assets/ssTodo.png'
import img6 from '../../assets/ssProfile.png'

const data = [
  {
    id:1 ,
    image: img1 ,
    title: 'Favourite Movie Search App' ,
    description: 'This react app uses real api to get movie result and we can add them to Favourites.',
    github:'https://github.com/SonalKhapre/favorite-movie-search-app' ,
    demo: 'https://sonalkhapre.github.io/favorite-movie-search-app/'
  },
  {
    id:2 ,
    image: img3 ,
    title: 'Text To Speech Convertor' ,
    description: 'It is built using HTML, CSS and JAVASCRIPT. You can type anything and it will speak for you!',
    github:'https://github.com/SonalKhapre/text-to-speech-convertor' ,
    demo: 'https://sonalkhapre.github.io/text-to-speech-convertor/'
  },
  {
    id:3 ,
    image: img2 ,
    title: 'Food Ordering Website' ,
    description: 'This frontend website is created using React. It is basically a Chinese food ordering website.',
    github:'https://github.com/SonalKhapre/React-frontend-food-website' ,
    demo: 'https://sonalkhapre.github.io/React-frontend-food-website/'
  },
  {
    id:4 ,
    image: img4 ,
    title: 'Tic Tac Toe Game' ,
    description: 'This game is built using React hooks, mainly useState and useRef. Have fun, feel nostalgic..',
    github:'https://github.com/SonalKhapre/React-Tic-Tac-Toe' ,
    demo: 'https://sonalkhapre.github.io/React-Tic-Tac-Toe/'
  },
  {
    id:5 ,
    image: img5 ,
    title: 'To-do List App' ,
    description: 'It is a complete JAVASCRIPT project. We can add tasks, mark as done and delete tasks in this list.',
    github:'https://github.com/SonalKhapre/to-do-list' ,
    demo: 'https://sonalkhapre.github.io/to-do-list/'
  },
  {
    id:6 ,
    image: img6 ,
    title: 'Portfolio Website' ,
    description: 'A React portfolio webiste, built modern and responsive design using CSS3. It has various contact options including emailjs.',
    github:'https://github.com/SonalKhapre/to-do-list' ,
    demo: 'https://sonalkhapre.github.io/to-do-list/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio' className='mainSection'>
    <h5>My Recent Work</h5>
    <h2>PORTFOLIO</h2>
    <div className='container portfolio__container'>
    { data.map(({id, image, title, description, github, demo}) => {
      return(
        <article key={id} className='portfolio__item'>
        <div className='portfolio__item-image'>
        <img src={image} alt={title}></img>
        </div>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className='portfolio__item-cta'>
          <a href={github} className='btn' target='_blank' rel="noreferrer" >Github</a>
          <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
        </div> 
      </article>
      )
    })}
     
     </div>
   </section>
      
      
   
  )
}


export default Portfolio