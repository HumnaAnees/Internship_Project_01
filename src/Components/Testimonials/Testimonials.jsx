import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.jpeg'
import user_2 from '../../assets/user-2.jpeg'
import user_3 from '../../assets/user-3.jpeg'
import user_4 from '../../assets/user-4.jpeg'


const Testimonials = () => {
    const slider =useRef();
    let tx =0;
    const slideForword = () =>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform =   `translateX(${tx}%)`;
    }
    const slideBackward = () =>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform =   `translateX(${tx}%)`;

    }

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForword}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Emily Johnson</h3>
                                <span>New York, NY</span>
                            </div>
                        </div>
                        <p>This internship helped me gain real-world experience that directly aligned with my career goals. I learned so much from the team and made lasting connections that have helped me in my job search. Highly recommend it!</p>
                    </div>
                </li>


                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Jacob Miller</h3>
                                <span>Los Angeles, CA</span>
                            </div>
                        </div>
                        <p>The hands-on experience I gained was invaluable. The mentorship I received gave me a deeper understanding of the industry, and I feel much more prepared to step into the workforce. This internship was a game-changer for my career.</p>
                    </div>
                </li>


                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Sophia Lee</h3>
                                <span>Chicago, IL</span>
                            </div>
                        </div>
                        <p>I had the opportunity to work on exciting projects and collaborate with talented professionals. This internship not only enhanced my skills but also gave me a clear sense of my career direction. A great experience overall!</p>
                    </div>
                </li>
                
                
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Daniel Smith</h3>
                                <span>Austin, TX</span>
                            </div>
                        </div>
                        <p>As a recent graduate, this internship was the perfect way to transition from academic learning to the professional world. I gained invaluable experience and had the chance to network with industry leaders, which has opened many doors for me.</p>
                    </div>
                </li>

            </ul>
        </div>
    </div>
  )
}

export default Testimonials