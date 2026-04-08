import { skills } from "../models/data.js";

const skillMeta = {
  "JavaScript": {
    icon: "fa-brands fa-js",
    caption: "Interactive frontend logic"
  },
  "Python": {
    icon: "fa-brands fa-python",
    caption: "Backend and AI workflows"
  },
  "SQL": {
    icon: "fa-solid fa-database",
    caption: "Structured data design"
  },
  "React": {
    icon: "fa-brands fa-react",
    caption: "Modern component systems"
  },
  "Next.js": {
    icon: "fa-solid fa-layer-group",
    caption: "App router experiences"
  },
  "Node.js": {
    icon: "fa-brands fa-node-js",
    caption: "Scalable server logic"
  },
  "MongoDB": {
    icon: "fa-solid fa-leaf",
    caption: "Flexible document storage"
  },
  "Tailwind CSS": {
    icon: "fa-solid fa-wind",
    caption: "Fast design systems"
  }
};

export function Skills() {
  return `
    <section id="skills" class="section-shell">
      <div class="section-heading">
        <span class="eyebrow">Core Skills</span>
        <h2 class="section-title">Tools I use to ship clean, modern, production-ready experiences</h2>
        <p class="section-copy">
          A balanced toolkit across frontend, backend, databases, and styling systems with a focus
          on readable code and polished user experiences.
        </p>
      </div>

      <div class="skills-grid">
        ${skills
          .map((skill) => {
            const meta = skillMeta[skill] || {
              icon: "fa-solid fa-code",
              caption: "Engineering toolkit"
            };

            return `
              <article class="skill-card">
                <div class="skill-icon">
                  <i class="${meta.icon}"></i>
                </div>

                <div class="skill-meta">
                  <span class="skill-label">${skill}</span>
                  <span class="skill-caption">${meta.caption}</span>
                </div>
              </article>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}
