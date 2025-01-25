import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import White_arrow from '../../assets/White-arrow.png'


const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "2e774149-7bd2-40d8-b770-a68fe227afd3");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
  
  
    return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>feel Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint at amet, delectus, repellendus nulla quia quos esse perspiciatis maxime, non a error. Adipisci, est aut!</p>
            <ul>
                <li> <img src={mail_icon} alt="" />Contact@internship.pakistan</li>
                <li> <img src={phone_icon} alt="" />+1 124-466-5693</li>
                <li> <img src={location_icon} alt="" />77 Massachuets Ave, Cambridge <br /> MA 01239, United states</li>
            
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder='Enter your mobile number' required/>
                <label>Write your messages here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn' >Submit now <img src={White_arrow} alt="" /></button>
                       </form>
                       <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact