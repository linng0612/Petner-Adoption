import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMapMarkerAlt,faPaw,faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "44662647-be0a-4ea6-976a-a9bababc4fe1");

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
    <div className="contactPage">
      <div className='contactPage-intro-img'></div>

      <Navbar/>

      <h1>CONTACT</h1>
      <div className="contact">
        <div className="contact-col">
          <h2>Sent us a message <FontAwesomeIcon icon={faPaw} /></h2>
          <p>Please get in touch via the form or find our contact information below. Your feedback, questions and suggestions are important to the maintenance and growth of the organization.</p>
          <ul>
            <li><FontAwesomeIcon icon={faPhone} />&nbsp;  (+358)255987563</li>
            <li><FontAwesomeIcon icon={faEnvelope} />&nbsp;  petner@gmail.com</li>
            <li><FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp;  Raviradantie 777, Mikkeli, Finland</li>
          </ul>
        </div>

        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name="name" placeholder="Enter your name" required/>
            <label>Phone number</label>
            <input type="text" name="phone" placeholder="Enter your phone number" required/>
            <label>Your email</label>
            <input type="email" name="email" placeholder="Enter your email" required/>
            <label>Your message</label>
            <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
            <button type="submit" className="send-btn">Send <FontAwesomeIcon icon={faArrowRight} /></button>
          </form>
          <span>{result}</span>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact