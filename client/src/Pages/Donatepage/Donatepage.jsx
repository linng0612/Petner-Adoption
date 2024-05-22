import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Footer from "../../Components/Footer/Footer";
import DonatePage from '../../Components/Donate/Donate';
import { DonateProvider } from '../../Contexts/donateContext';
import "./Donatepage.css";



const Donatepage = () => {
    return (
      <div className="donatePage">
        <div className='donatePage-intro-img'></div>
        <Navbar/>
        <DonateProvider>
        <DonatePage/>
        </DonateProvider>
        <Footer/>
      </div>
    );
  }

export default Donatepage