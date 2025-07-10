// Header.js
import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <a href="#about">Andrii Prysiazhnyi</a>
        </div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
