// Adoptpage.jsx
import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Adopt from '../../Components/Adopt/Adopt';
import Footer from '../../Components/Footer/Footer';
import './Adoptpage.css';

const Adoptpage = () => {
  return (
    <div className='adoptPage'>
      <div className='adoptPage-intro-img'></div>
      <Navbar/>
        <Adopt/>
      <Footer/>
    </div>   
  );
}

export default Adoptpage;