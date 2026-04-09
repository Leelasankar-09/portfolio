import { codingProfiles } from "../models/data.js";

export function CodingProfiles() {
  const { leetcode } = codingProfiles;

  return `
    <section id="coding-profiles" class="section-shell">
      <div class="section-heading">
        <span class="eyebrow">Coding Profiles</span>
        <h2 class="section-title">A snapshot of my problem-solving and competitive coding presence</h2>
        <p class="section-copy">
          A focused section for the platforms where I practice consistency, pattern recognition,
          and interview-style thinking.
        </p>
      </div>

      <div class="coding-profiles-grid">
        <article class="coding-profile-card">
          <div class="coding-profile-top">
            <div class="coding-platform-mark" aria-hidden="true">
              <span class="coding-platform-shape"></span>
              <span class="coding-platform-dot"></span>
            </div>

            <div class="coding-profile-meta">
              <span class="coding-profile-label">LeetCode</span>
              <h3>@${leetcode.username}</h3>
              <p>Problem solving, interview prep, and steady coding practice.</p>
            </div>
          </div>

          <div class="coding-profile-actions">
            <a
              class="btn btn-primary"
              href="${leetcode.profileUrl}"
              target="_blank"
              rel="noreferrer"
            >
              View Profile
            </a>
          </div>
        </article>

        <article class="leetcode-stats-card">
          <img
            data-leetcode-stats
            data-username="${leetcode.username}"
            src="https://leetcard.jacoblin.cool/${leetcode.username}?theme=dark&font=Plus%20Jakarta%20Sans&ext=contest"
            alt="LeetCode stats for ${leetcode.username}"
            loading="lazy"
          >
        </article>
      </div>
    </section>
  `;
}
