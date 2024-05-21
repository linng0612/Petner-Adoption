import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Footer from "../../Components/Footer/Footer";
import DonatePage from '../../Components/Donate/Donate';
import { DonateProvider } from '../../Contexts/donateContext';



const Donatepage = () => {
    return (
      <>
        <Navbar/>
        <Hero 
        cName="hero-mid"
        heroText="hero-mid-text"
        heroImg="https://images.unsplash.com/photo-1650251381717-17c7fa43966a?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Donate"
        />
        <DonateProvider>
        <DonatePage/>
        </DonateProvider>
        <Footer/>
      </>
    );
  }

export default Donatepage