import { getTodoContainer } from "./todoContainer";

const container = document.querySelector(".container");
const navBar = document.querySelector(".nav");
const addTaskBtn = document.querySelector(".addTaskBtn");
const searchBtn = document.querySelector(".searchBtn");
const inboxBtn = document.querySelector(".inboxBtn");
const todayBtn = document.querySelector(".todayBtn");

const myProjects = document.createElement("button");
myProjects.classList.add("myProjectTab");
myProjects.textContent = "My Projects";
navBar.appendChild(myProjects);

container.append(getTodoContainer());
console.log("I worked");
