import { education } from "../models/data.js";

export function Education() {
  return `
    <section id="education" class="section-shell">
      <div class="timeline-heading">
        <span class="eyebrow">Education</span>
        <h2 class="section-title">A consistent academic journey built on strong fundamentals</h2>
        <p class="timeline-copy">
          From school-level excellence to current computer science studies, this timeline stays
          visible and aligned at every screen size.
        </p>
      </div>

      <div class="timeline">
        ${education
          .map(
            (edu, index) => `
              <div class="timeline-item ${index % 2 === 0 ? "left" : "right"}">
                <div class="timeline-dot"></div>

                <div class="timeline-content">
                  <div class="edu-icon">
                    <i class="fa-solid ${index === 0 ? "fa-graduation-cap" : index === 1 ? "fa-book-open" : "fa-school"}"></i>
                  </div>

                  <h3>${edu.title}</h3>
                  <p class="edu-place">${edu.place}</p>
                  <p class="edu-time">${edu.time}</p>
                  <p class="edu-detail">${edu.detail}</p>
                </div>
              </div>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}
