import React from "react";

const projects = [
  {
    title: "This Website source code!",
    description: "A React/JavaScript app that does amazing things.",
    link: "https://github.com/AndriiPrysiazhnyi/my-portfolio",
  },
  {
    title: "Work In Progress...",
    description: "It would be great, I promise!",
    link: "https://github.com/AndriiPrysiazhnyi/BaseKotlinProjectTraining",
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map(({ title, description, link }) => (
          <a
            key={title}
            href={link}
            className="project-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="project-title">{title}</h3>
            <p className="project-desc">{description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
