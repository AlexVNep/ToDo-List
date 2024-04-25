import { navBar } from "./navBar";
import { createTodoElements } from "./todoContainer";
import { Todo } from "./todoModule";

export function projects() {
  const navContainer = navBar();
  const projects = document.createElement("div");
  projects.classList.add("projectsHeading");
  projects.textContent = "Projects";
  navContainer.appendChild(projects);
}
