import { getHomePage } from "./homePage.js";
import { getAddTask } from "./todoContainer.js";
import { getInboxPage } from "./inboxPage.js";
import { getTodayPage } from "./todayPage.js";

const navContainer = document.querySelector(".navContainer");
const content = document.querySelector(".container");

const navTitle = document.createElement("h1");
navTitle.classList.add("navTitle");
navTitle.textContent = "Just Do It... If You Want";
navContainer.appendChild(navTitle);

const homeButton = document.createElement("button");
homeButton.classList.add("homeButton");
homeButton.textContent = "Home";
navContainer.appendChild(homeButton);
homeButton.addEventListener("click", () => {
  content.replaceChildren();
  content.appendChild(getHomePage());
});

const addTaskButton = document.createElement("button");
addTaskButton.classList.add("addTaskButton");
addTaskButton.textContent = "Add New Task";
navContainer.appendChild(addTaskButton);
addTaskButton.addEventListener("click", () => {
  content.replaceChildren();
  content.append(getAddTask());
});

const search = document.createElement("input");
search.setAttribute("type", "text");
search.setAttribute("placeholder", "Search...");
navContainer.append(search);

const inbox = document.createElement("button");
inbox.classList.add("inboxButton");
inbox.textContent = "Inbox";
navContainer.appendChild(inbox);
inbox.addEventListener("click", () => {
  content.replaceChildren();
  content.append(getInboxPage());
});

const today = document.createElement("button");
today.classList.add("todayButton");
today.textContent = "Today";
navContainer.appendChild(today);
today.addEventListener("click", () => {
  content.replaceChildren();
  content.append(getTodayPage());
});

const projects = document.createElement("div");
projects.classList.add("projectsHeading");
projects.textContent = "Projects";
navContainer.appendChild(projects);

content.append(getHomePage());
// export function getNavContainer() {
//   return navContainer;
// }
console.log("I worked");
