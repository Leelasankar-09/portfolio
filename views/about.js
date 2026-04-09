import { about } from "../models/data.js";

function renderPillGroup(items, className) {
  return items
    .map(
      (item) => `
        <span class="${className}">
          <i class="${item.icon}" aria-hidden="true"></i>
          <span>${item.name}</span>
        </span>
      `
    )
    .join("");
}

function renderHeatmap() {
  const weeks = 22;
  const days = 7;

  return Array.from({ length: weeks * days }, (_, index) => {
    const week = Math.floor(index / days);
    const day = index % days;
    const seasonal = Math.sin(week * 0.55) + Math.cos(day * 1.18);
    const cadence = week % 5 === 0 ? 1 : week % 3 === 0 ? 0.45 : 0;
    const level = Math.max(0, Math.min(4, Math.round(seasonal + cadence + 1.1)));

    return `<span class="heatmap-cell" data-level="${level}" aria-hidden="true"></span>`;
  }).join("");
}

export function About() {
  return `
    <section id="about" class="section-shell">
      <div class="section-heading">
        <span class="eyebrow">About</span>
        <h2 class="section-title">Built with focus, strong fundamentals, and a calm approach to execution</h2>
        <p class="section-copy">
          A broader snapshot of the stack I work with, the tools I rely on daily, and the
          consistency I bring to coding beyond project work.
        </p>
      </div>

      <div class="about-grid">
        <article class="about-panel">
          <div class="about-panel-heading">
            <span class="about-kicker">01</span>
            <div>
              <h3>Professional Skillset</h3>
              <p>Core technologies I use across frontend, backend, cloud, and systems work.</p>
            </div>
          </div>

          <div class="pill-cloud">
            ${renderPillGroup(about.professionalSkillset, "skill-pill")}
          </div>
        </article>

        <article class="about-panel">
          <div class="about-panel-heading">
            <span class="about-kicker">02</span>
            <div>
              <h3>Tools I Use</h3>
              <p>Daily tools that keep my workflow lean, readable, and fast.</p>
            </div>
          </div>

          <div class="tools-grid">
            ${renderPillGroup(about.tools, "tool-card")}
          </div>
        </article>

        <article class="about-panel activity-panel">
          <div class="about-panel-heading">
            <span class="about-kicker">03</span>
            <div>
              <h3>Days I Code</h3>
              <p>${about.activity.contributionsText}</p>
            </div>
          </div>

          <div class="activity-card">
            <div class="heatmap-shell">
              <div class="heatmap-grid" aria-label="Contribution heatmap">
                ${renderHeatmap()}
              </div>
            </div>

            <div class="activity-meta">
              <span class="activity-legend-label">Less</span>
              <div class="activity-legend" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span class="activity-legend-label">More</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  `;
}
