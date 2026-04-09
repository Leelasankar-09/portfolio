import { Navbar } from "../views/navbar.js";
import { Hero } from "../views/hero.js";
import { About } from "../views/about.js";
import { Education } from "../views/education.js";
import { Projects } from "../views/projects.js";
import { Skills } from "../views/skills.js";
import { CodingProfiles } from "../views/codingProfiles.js";
import { Contact } from "../views/contact.js";

export function loadApp() {
  document.getElementById("app").innerHTML =
    Navbar() +
    Hero() +
    About() +
    Education() +
    Projects() +
    Skills() +
    CodingProfiles() +
    Contact();
}
