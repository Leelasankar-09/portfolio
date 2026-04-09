import { projects } from "../models/data.js";

export function Projects() {
  const safeProjects = Array.isArray(projects) ? projects.filter(Boolean) : [];

  return `
    <section id="projects" class="section-shell">
      <div class="projects-header">
        <div class="section-heading">
          <span class="eyebrow">Selected Work</span>
          <h2 class="section-title">Projects built with product thinking and engineering depth</h2>
          <p class="section-copy">
            Swipe through featured builds designed to stay clean, readable, and stable across
            mobile and desktop layouts.
          </p>
        </div>

        <div class="projects-nav" aria-label="Project navigation">
          <button type="button" class="project-nav-btn" data-project-nav="prev" aria-label="Previous project">
            <i class="fa-solid fa-arrow-left"></i>
          </button>
          <button type="button" class="project-nav-btn" data-project-nav="next" aria-label="Next project">
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>

      <div class="projects-rail" data-projects-rail tabindex="0" aria-label="Project cards slider">
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

      <p class="projects-hint">Swipe left or right on touch devices, or use the arrows to browse.</p>
    </section>
  `;
}
