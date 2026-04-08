import { projects } from "../models/data.js";

export function Projects() {
  const safeProjects = Array.isArray(projects) ? projects.filter(Boolean) : [];

  return `
    <section id="projects" class="section-shell">
      <div class="section-heading">
        <span class="eyebrow">Selected Work</span>
        <h2 class="section-title">Projects built with product thinking and engineering depth</h2>
        <p class="section-copy">
          A mix of full-stack systems and AI-powered experiences designed to feel polished,
          reliable, and useful in real workflows.
        </p>
      </div>

      <div class="project-grid">
        ${safeProjects
          .map((project, index) => {
            const title = project.title ?? project.name ?? "Untitled Project";
            const description = project.description ?? project.desc ?? "";
            const techStack = Array.isArray(project.technologies)
              ? project.technologies
              : Array.isArray(project.tech)
                ? project.tech
                : [];

            return `
              <article class="project-card">
                <div class="project-card-top">
                  <span class="project-kicker">Featured Project</span>
                  <span class="project-index">${String(index + 1).padStart(2, "0")}</span>
                </div>

                <h3>${title}</h3>
                <p>${description}</p>

                <div class="tech-stack">
                  ${techStack.map((technology) => `<span>${technology}</span>`).join("")}
                </div>
              </article>
            `
          })
          .join("")}
      </div>
    </section>
  `;
}
