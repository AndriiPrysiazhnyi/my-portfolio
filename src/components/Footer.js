import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <a
        href="https://linkedin.com/in/andrii-prysiazhnyi"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
      <p className="footer-text">© {new Date().getFullYear()} Andrii Prysiazhnyi</p>
    </footer>
  );
}
