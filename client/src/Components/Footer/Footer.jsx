import React from 'react'
import './Footer.css'
import logo from "../../assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div className="footer">
        <div className="left">
            <div>
            <img alt="logo" src={logo}/>
            
            </div>
            <div>
                <a href="https://www.facebook.com/">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.instagram.com/">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.twitter.com/">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </div>
            
        </div>

        <div className="right">
            <div className="info-section">
                <h3 className="info-title">About us</h3>
                <p className="info-text">This is an organization that works for the love of dogs and cats </p>
            </div>
            <div className="info-section">
                <h3 className="info-title">Contact us</h3>
                <div className="contact-detail">
                    <FontAwesomeIcon icon={faPhone} />&nbsp; (+358)255987563
                </div>
                <div className="contact-detail">
                    <FontAwesomeIcon icon={faEnvelope} />&nbsp; petner@gmail.com
                </div>
                <div className="contact-detail">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp; Raviradantie 777, Mikkeli, Finland
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Footer