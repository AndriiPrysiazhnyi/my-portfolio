import React from "react";
import profileHeadshot from "../assets/profileHeadshot.jpg";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <img src={profileHeadshot} alt="Andrii Prysiazhnyi" className="hero-img" />
      <h1 className="hero-name">Andrii Prysiazhnyi</h1>
      <p className="hero-title">SDET | Quality Assurance</p>
      <p className="hero-desc">
       SDET based in Bensalem. Building Website for myself.
      </p>
    </section>
  );
}
