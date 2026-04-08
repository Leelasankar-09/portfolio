import { Navbar } from "../views/navbar.js";
import { Hero } from "../views/hero.js";
import { Education } from "../views/education.js";
import { Projects } from "../views/projects.js";
import { Skills } from "../views/skills.js";
import { Achievements } from "../views/achievements.js";
import { Contact } from "../views/contact.js";

export function loadApp() {
  document.getElementById("app").innerHTML =
    Navbar() +
    Hero() +
    Education() +
    Projects() +
    Skills() +
    Achievements() +
    Contact();
}