
import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero">
      <img alt="HeroImg" src="https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <div className="hero-text">
        <h1>Find your four-legged friend</h1>
        <p>Here in the shelter, there will be friends for everyone</p>
        <Link to="/adopt" className="btn hero-button">Adopt</Link>
      
      </div>
    </div>
  );
}

export default Hero;