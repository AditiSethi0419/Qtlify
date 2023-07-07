import React from "react";
import "./Hero.css"
import headphone from '../assets/vibrating_headphone.png'

const Hero = () => {
  return (
    <div className="hero">
      <div >
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img src={headphone} width={212} alt="hero-section-headphones"/>
      </div>
    </div>
  );
};

export default Hero;
