export function Navbar() {
  return `
    <nav class="navbar">
      <a href="#home" class="brand">Leela.dev</a>

      <div class="nav-links">
        <a href="#home">Home</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>

      <div class="nav-actions">
        <button
          type="button"
          class="theme-toggle"
          data-theme-toggle
          aria-label="Switch theme"
          aria-pressed="false"
        >
          <i class="fa-solid fa-moon"></i>
          <span data-theme-label>Dark</span>
        </button>

        <a
          href="resume/Leela_Resume.pdf"
          download="Leela_Sankar_Reddy_Resume.pdf"
          class="btn btn-primary"
        >
          Download Resume
        </a>
      </div>
    </nav>
  `;
}
