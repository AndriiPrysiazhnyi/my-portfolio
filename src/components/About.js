import React from "react";
import "./About.css";
import profileHeadshot from "../assets/profileHeadshot.jpg";
import javaLogo from "../assets/logos/java.svg";
import seleniumLogo from "../assets/logos/selenium.svg";
import jenkinsLogo from "../assets/logos/jenkins.svg";
import dockerLogo from "../assets/logos/docker.svg";
import gitLogo from "../assets/logos/git.svg";
import postmanLogo from "../assets/logos/postman.svg";

const leftTools = [
  { name: "Java", img: javaLogo, info: "Programming language for test automation" },
  { name: "Selenium", img: seleniumLogo, info: "UI Automation testing framework" },
  { name: "Jenkins", img: jenkinsLogo, info: "Continuous Integration tool" },
];

const rightTools = [
  { name: "Docker", img: dockerLogo, info: "Containerization platform" },
  { name: "Git", img: gitLogo, info: "Version control system" },
  { name: "Postman", img: postmanLogo, info: "API testing platform" },
];

const About = () => {
  return (
    <section id="hero" className="about-section">
      {/* Left side logos */}
      <div className="tools-column">
        {leftTools.map((tool, i) => (
          <div key={i} className="tool-item">
            <img src={tool.img} alt={tool.name} />
            <div className="tooltip">
              <h4>{tool.name}</h4>
              <p>{tool.info}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Center profile / hero content */}
      <div className="hero-content">
        <img src={profileHeadshot} alt="Andrii Prysiazhnyi" className="hero-img" />
        <h1 className="hero-name">Andrii Prysiazhnyi</h1>
        <p className="hero-title">SDET | Quality Assurance</p>
        <p className="hero-desc">
          Hello! I’m a Software Development Engineer in Test
          with hands-on experience in Java, Selenium, Jenkins, REST API, and modern
          automation frameworks. I love building efficient testing pipelines that
          make development faster and more reliable.
        </p>
      </div>

      {/* Right side logos */}
      <div className="tools-column">
        {rightTools.map((tool, i) => (
          <div key={i} className="tool-item">
            <img src={tool.img} alt={tool.name} />
            <div className="tooltip">
              <h4>{tool.name}</h4>
              <p>{tool.info}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
