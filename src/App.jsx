import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contacts/contact'
import Footer from './components/footer/Footer'
// Import AOS in your JavaScript file
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init();


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App;