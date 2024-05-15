import React from 'react'
import "./Banner.css"
import banner from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className="banner">
        <div className="banner-container">
            <h1>FIND YOUR FOURTH-LEGGED FRIEND</h1>
            <p>Here in the shelter, there will be friends for everyone</p>
            <button className="btn">Adopt Now</button>
        </div>
        <img src={banner} alt="" className="banner-img"/>
    
    </div>
  )
}

export default Banner