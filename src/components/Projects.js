import React from "react";

const projects = [
  {
    title: "Project One",
    description: "A React app that does amazing things.",
    link: "https://github.com/your/repo1",
  },
  {
    title: "Project Two",
    description: "An innovative frontend project with cool features.",
    link: "https://github.com/your/repo2",
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
