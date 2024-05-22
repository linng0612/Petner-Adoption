import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import './Homepage.css';

const Homepage = () => {
  return (
      <div className="homePage">
        <Navbar />
        <Hero 
        cName="hero"
        heroText="hero-text"
        title="Find your four-legged friends"
        text="Here in the shelter, there will be friends for everyone"
        buttonText="Adopt"
        link="/adopt"
        btnClass="btn"
      />
      </div>
  );
}

export default Homepage;