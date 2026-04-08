import { profile } from "../models/data.js";

export function Hero() {
  return `
    <section class="hero">

      <h1 class="fade-in">
        Hi, I'm 
        <span class="gradient-text">${profile.name}</span>
      </h1>

      <h2 class="typing" id="typing-text"></h2>

      <p class="desc fade-in-delay">
        ${profile.description}
      </p>

      <div class="social-icons fade-in-delay2">
        <a href="${profile.github}" target="_blank" rel="noreferrer">
          <i class="fab fa-github"></i>
        </a>

        <a href="${profile.linkedin}" target="_blank" rel="noreferrer">
          <i class="fab fa-linkedin"></i>
        </a>

        <a href="mailto:${profile.email}">
          <i class="fas fa-envelope"></i>
        </a>

        <a href="resume/Leela_Resume.pdf" download="Leela_Sankar_Reddy_Resume.pdf">
          <i class="fas fa-file-download"></i>
        </a>
      </div>

    </section>
  `;
}
