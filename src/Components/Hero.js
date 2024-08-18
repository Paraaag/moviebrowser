import React from "react";
import './Hero.css';

const Hero = ({ text, backdrop }) => {
  return (
    <>
      <header className="hero-container">
        <div className="hero-content">
          <h1 className="hero-text">{text}</h1>
        </div>
        {backdrop && (
          <div
            className="hero-backdrop"
            style={{ backgroundImage: `url(${backdrop})` }}
          ></div>
        )}
        <div className="overlay"></div>
      </header>
    </>
  );
};

export default Hero;
