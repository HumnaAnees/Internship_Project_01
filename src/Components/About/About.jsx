import React from 'react'
import './About.css'
import about_img from '../../assets/about-img.jpeg'
import play_icon from '../../assets/play-icon.png'


const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/> 
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>   
        </div>
        <div className="about-right">
            <h3>About Internship</h3>
            <h2>Shaping Future Leaders Through Internships</h2>
            <p>Internships lay the foundation for future leaders by bridging the gap between academic learning and real-world experience. They help individuals develop essential skills like teamwork, problem-solving, and adaptability.</p>
            <p>Additionally, internships provide valuable networking and mentorship opportunities. Working with professionals allows interns to gain insights, build connections, and explore career prospects.</p>            
            <p>Through real-world challenges, internships boost confidence and foster self-discovery. They help individuals refine their career goals and prepare for impactful roles in their chosen fields.</p>        
            </div>
    </div>
  )
}

export default About