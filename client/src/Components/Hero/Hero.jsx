import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = (props) => {
  return (
    <>
      <div className={props.cName}>
        <div className={props.heroText}>
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <Link to={props.link} className={props.btnClass}>{props.buttonText}</Link>
        </div>
      </div>
    </>
  );
};

export default Hero;