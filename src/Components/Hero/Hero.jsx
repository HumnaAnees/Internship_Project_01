import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>Explore Internship Opportunities Near You!</h1>
            <p>Discover internships designed to help you gain real-world experience, enhance your skills, and grow your professional network. Whether you’re a student or a recent graduate, this is your chance to kickstart your career. Explore now and take the first step toward success!</p>            
            <button  className='btn'>Explore Internships <img src={dark_arrow} alt="" /></button>


          {/* <Link to='program' smooth={true} offset={-260} duration={500} className='btn'>Contact us <img src={dark_arrow} alt="" /> </Link> */}

            
            </div>
    </div>
  )
}

export default Hero