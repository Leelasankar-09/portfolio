import { loadApp } from "../../controllers/appController.js";

const STORAGE_KEY = "portfolio-theme";
const RESUME_PATH = "resume/Leela_Resume.pdf";
const RESUME_FILE_NAME = "Leela_Sankar_Reddy_Resume.pdf";
const ROTATING_ROLES = [
  "Software Developer",
  "Full Stack Developer",
  "AI Systems Builder",
  "Product-Focused Engineer",
];

const backgroundState = {
  layers: [],
  renderer: null,
  camera: null,
};

bootPortfolio();

function bootPortfolio() {
  queueLoaderDismiss();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializePortfolio, { once: true });
    return;
  }

  initializePortfolio();
}

function initializePortfolio() {
  applyTheme(getPreferredTheme(), { persist: false });
  loadApp();
  decorateStaticSections();
  syncResumeLinks();
  initThemeToggle();
  initProjectSlider();
  syncLeetCodeTheme(document.body.dataset.theme || "dark");
  initBackground();
  initTypingEffect();
  initRevealAnimations();
}

function decorateStaticSections() {
  const heroSection = document.querySelector(".hero");
  if (heroSection) {
    heroSection.id = "home";
    heroSection.classList.add("section-shell");
  }

  const educationSection = document.getElementById("education");
  if (educationSection) {
    educationSection.classList.add("section-shell");
  }

  const skillsSection = document.getElementById("skills");
  if (skillsSection) {
    skillsSection.classList.add("section-shell");
  }
}

function syncResumeLinks() {
  document
    .querySelectorAll('a[href="assets/resume/resume.pdf"], a[href="resume/Leela_Resume.pdf"]')
    .forEach((link) => {
      link.setAttribute("href", RESUME_PATH);
      link.setAttribute("download", RESUME_FILE_NAME);
    });
}

function initThemeToggle() {
  const toggleButton = document.querySelector("[data-theme-toggle]");
  if (!toggleButton) {
    return;
  }

  toggleButton.addEventListener("click", () => {
    const nextTheme = document.body.dataset.theme === "light" ? "dark" : "light";
    applyTheme(nextTheme);
  });

  updateThemeToggle(document.body.dataset.theme || "dark");
}

function initProjectSlider() {
  const rail = document.querySelector("[data-projects-rail]");
  const prevButton = document.querySelector('[data-project-nav="prev"]');
  const nextButton = document.querySelector('[data-project-nav="next"]');

  if (!rail || !prevButton || !nextButton) {
    return;
  }

  const scrollAmount = () => {
    const firstCard = rail.querySelector(".project-card");
    if (!firstCard) {
      return rail.clientWidth * 0.85;
    }

    const gap = 24;
    return firstCard.getBoundingClientRect().width + gap;
  };

  prevButton.addEventListener("click", () => {
    rail.scrollBy({
      left: -scrollAmount(),
      behavior: "smooth",
    });
  });

  nextButton.addEventListener("click", () => {
    rail.scrollBy({
      left: scrollAmount(),
      behavior: "smooth",
    });
  });
}

function getPreferredTheme() {
  try {
    const storedTheme = window.localStorage.getItem(STORAGE_KEY);
    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }
  } catch {
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function applyTheme(theme, { persist = true } = {}) {
  const resolvedTheme = theme === "light" ? "light" : "dark";

  document.body.dataset.theme = resolvedTheme;
  document.documentElement.style.colorScheme = resolvedTheme;

  if (persist) {
    try {
      window.localStorage.setItem(STORAGE_KEY, resolvedTheme);
    } catch {}
  }

  updateThemeToggle(resolvedTheme);
  syncLeetCodeTheme(resolvedTheme);
  updateBackgroundTheme(resolvedTheme);
}

function updateThemeToggle(theme) {
  const toggleButton = document.querySelector("[data-theme-toggle]");
  if (!toggleButton) {
    return;
  }

  const icon = toggleButton.querySelector("i");
  const label = toggleButton.querySelector("[data-theme-label]");
  const isLightTheme = theme === "light";

  toggleButton.setAttribute("aria-pressed", String(isLightTheme));
  toggleButton.setAttribute(
    "aria-label",
    isLightTheme ? "Switch to dark mode" : "Switch to light mode"
  );

  if (icon) {
    icon.className = isLightTheme ? "fa-solid fa-sun" : "fa-solid fa-moon";
  }

  if (label) {
    label.textContent = isLightTheme ? "Light" : "Dark";
  }
}

function initBackground() {
  if (typeof window.THREE === "undefined") {
    return;
  }

  const container = document.querySelector("#bg-canvas");
  if (!container) {
    return;
  }

  container.innerHTML = "";

  const scene = new window.THREE.Scene();
  const camera = new window.THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new window.THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);
  renderer.domElement.setAttribute("aria-hidden", "true");
  container.appendChild(renderer.domElement);
  camera.position.z = 5.8;

  const palette = getParticlePalette(document.body.dataset.theme);
  const layerOne = createParticles(240, 0.018, palette.primary, 18, 0.16);
  const layerTwo = createParticles(110, 0.024, palette.secondary, 26, 0.09);
  const layerThree = createParticles(42, 0.032, palette.tertiary, 34, 0.05);

  backgroundState.layers = [layerOne, layerTwo, layerThree];
  backgroundState.renderer = renderer;
  backgroundState.camera = camera;

  scene.add(layerOne);
  scene.add(layerTwo);
  scene.add(layerThree);

  const animate = () => {
    layerOne.rotation.y += 0.00008;
    layerOne.rotation.x += 0.00003;
    layerTwo.rotation.x += 0.00005;
    layerThree.rotation.z += 0.000025;
    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
  };

  animate();

  window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
}

function createParticles(count, size, color, spread, opacity) {
  const geometry = new window.THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);

  for (let index = 0; index < count * 3; index += 1) {
    positions[index] = (Math.random() - 0.5) * spread;
  }

  geometry.setAttribute("position", new window.THREE.BufferAttribute(positions, 3));

  const material = new window.THREE.PointsMaterial({
    color,
    size,
    transparent: true,
    opacity,
    depthWrite: false,
  });

  return new window.THREE.Points(geometry, material);
}

function getParticlePalette(theme) {
  if (theme === "light") {
    return {
      primary: 0xd7dce3,
      secondary: 0xe8ecf1,
      tertiary: 0xc8ced8,
    };
  }

  return {
    primary: 0xcfc5f9,
    secondary: 0xf2f4ff,
    tertiary: 0x8e84b7,
  };
}

function updateBackgroundTheme(theme) {
  if (!backgroundState.layers.length) {
    return;
  }

  const palette = getParticlePalette(theme);
  backgroundState.layers[0].material.color.setHex(palette.primary);
  backgroundState.layers[1].material.color.setHex(palette.secondary);
  if (backgroundState.layers[2]) {
    backgroundState.layers[2].material.color.setHex(palette.tertiary);
  }
}

function initTypingEffect() {
  const typingElement = document.getElementById("typing-text");
  if (!typingElement) {
    return;
  }

  let roleIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;

  const typeRole = () => {
    const currentRole = ROTATING_ROLES[roleIndex];

    if (isDeleting) {
      letterIndex -= 1;
    } else {
      letterIndex += 1;
    }

    typingElement.textContent = currentRole.slice(0, letterIndex);

    const finishedTyping = !isDeleting && letterIndex === currentRole.length;
    const finishedDeleting = isDeleting && letterIndex === 0;

    if (finishedTyping) {
      isDeleting = true;
      window.setTimeout(typeRole, 1300);
      return;
    }

    if (finishedDeleting) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % ROTATING_ROLES.length;
    }

    window.setTimeout(typeRole, isDeleting ? 45 : 90);
  };

  window.setTimeout(typeRole, 700);
}

function initRevealAnimations() {
  const revealTargets = Array.from(
    document.querySelectorAll(
      "#about .about-panel, #projects .project-card, #skills .skill-card, #coding-profiles .coding-profile-card, #coding-profiles .leetcode-stats-card, #contact .contact-shell"
    )
  );

  if (!revealTargets.length) {
    return;
  }

  revealTargets.forEach((element, index) => {
    element.classList.add("reveal");
    element.style.setProperty("--reveal-delay", `${Math.min(index * 60, 240)}ms`);
  });

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealTargets.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  window.requestAnimationFrame(() => {
    revealTargets.forEach((element) => element.classList.add("is-visible"));
  });
}

function syncLeetCodeTheme(theme) {
  const statsImage = document.querySelector("[data-leetcode-stats]");
  if (!statsImage) {
    return;
  }

  const username = statsImage.dataset.username;
  const cardTheme = theme === "light" ? "light" : "dark";

  statsImage.src = `https://leetcard.jacoblin.cool/${username}?theme=${cardTheme}&font=Inter&ext=contest`;
}

function queueLoaderDismiss() {
  const hideLoader = () => {
    const loader = document.getElementById("loader");
    if (!loader || loader.classList.contains("is-hidden")) {
      return;
    }

    loader.classList.add("is-hidden");
    window.setTimeout(() => loader.remove(), 320);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", hideLoader, { once: true });
  } else {
    window.requestAnimationFrame(hideLoader);
  }

  window.setTimeout(hideLoader, 2400);
}
