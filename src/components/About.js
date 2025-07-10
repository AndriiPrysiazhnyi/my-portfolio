import React from "react";
import profilePic from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <img src={profilePic} alt="Andrii Prysiazhnyi" className="hero-img" />
      <h1 className="hero-name">Andrii Prysiazhnyi</h1>
      <p className="hero-title">Front-End Developer | React Specialist</p>
      <p className="hero-desc">
       SDET based in Bensalem. Building Website for myself.
      </p>
    </section>
  );
}
