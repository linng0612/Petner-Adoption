import React from 'react';
import './SubHero.css'; // Import the CSS for this component
import subhero from '../../assets/cathero.png'; 
const SubHero = ({ title }) => {
  return (
    <div className="sub-hero">
      <img alt="sub-hero" src={subhero} />
    </div>
  );
}

export default SubHero;