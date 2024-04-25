import { Todo } from "./todoModule";
import { createTodoElements } from "./todoContainer";
import { content } from "./todoContainer";

export function navBar() {
  const navContainer = document.createElement("div");
  navContainer.classList.add("navContainer");
  content.appendChild(navContainer);

  const addTaskButton = createTodoElements();
  navContainer.appendChild(addTaskButton);

  const search = document.createElement("input");
  search.setAttribute("type", "text");
  search.setAttribute("placeholder", "Search...");
  navContainer.appendChild(search);

  const inbox = document.createElement("button");
  inbox.classList.add("inboxButton");
  inbox.textContent = "Inbox";
  navContainer.appendChild(inbox);

  const today = document.createElement("button");
  today.classList.add("todayButton");
  today.textContent = "Today";
  navContainer.appendChild(today);

  return navContainer;
}
