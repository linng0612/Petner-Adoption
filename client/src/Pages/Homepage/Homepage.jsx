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
      <Hero/>
      <DonateProvider>
        <DonatePage/>
      </DonateProvider>
      
      <Footer/>
    </>
  );
}

export default Homepage;
