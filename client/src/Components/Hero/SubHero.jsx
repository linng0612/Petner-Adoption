import React from 'react';
import './SubHero.css'; 
import subhero from '../../assets/cathero.png'; 
const SubHero = ({ title }) => {
  return (
    <div className="sub-hero">
      <img alt="sub-hero" src={subhero} />
    </div>
  );
}

export default SubHero;