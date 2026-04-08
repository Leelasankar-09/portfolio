import { achievements } from "../models/data.js";

export function Achievements() {
  return `
    <section>
      <h2 style="text-align:center;">Achievements</h2>
      <div class="skills">
        ${achievements.map(a => `<span>${a}</span>`).join("")}
      </div>
    </section>
  `;
}