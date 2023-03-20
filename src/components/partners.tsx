import React from "react";
import babs from "../images/babs.webp";
import block from "../images/block.webp";
import center from "../images/center.webp";
import "../styles/landing.scss";


function Partners() {
  return (
    <section id="hero-4">
      <h1>
        Our <span>Partners</span>
      </h1>
      <div className="flex-box">
        <img src={block} className="block" alt="blockchain" />
        <img src={center} className="block center" alt="blockchain" />
        <img src={babs} className="block babs" alt="blockchain" />
        <img src={block} className="block" alt="blockchain" />
        <img src={center} className="block center" alt="blockchain" />
      </div>
    </section>
  );
}

export default Partners;
