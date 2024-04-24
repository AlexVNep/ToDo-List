import { Nav } from "./navModule";
import { createTodoElements } from "./todoContainer";

export function navBar() {
  const navContainer = document.createElement("div");
  navContainer.classList.add("navContainer");
  document.body.appendChild(navContainer);

  const button = createTodoElements();
  navContainer.appendChild(button);
}
