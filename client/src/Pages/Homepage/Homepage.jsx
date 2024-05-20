// Homepage.jsx
import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import Footer from '../../Components/Footer/Footer';
import DonatePage from '../../Components/Donate/Donate';
import { DonateProvider } from '../../Contexts/donateContext';

const Homepage = () => {
  return (
    <>
      <Navbar/>
      <Hero 
        cName="hero"
        heroText="hero-text"
        heroImg="https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Find your four-legged friends"
        text="Here in the shelter, there will be friends for everyone"
        buttonText="Adopt"
        link="/adopt"
        btnClass="btn"
      />
    </>
  );
}

export default Homepage;
