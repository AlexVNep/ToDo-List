import { getAddTask } from "./todoContainer";
import { projectChoiceInput } from "./todoContainer";

//Create project page div
const projectsPage = document.createElement("div");
projectsPage.classList.add("projectsPage");

//Create heading for project page
const projectsTitle = document.createElement("h1");
projectsTitle.classList.add("projectsTitle");
projectsTitle.textContent = "Projects";
projectsPage.appendChild(projectsTitle);

//create add project button element
const addProjectButton = document.createElement("button");
addProjectButton.classList.add("addProjectButton");
addProjectButton.textContent = "Add Project";
addProjectButton.addEventListener("click", addProjectButtonClickHandler);

let form;

//Create form element for add project button
function createProject() {
  form = document.createElement("form");
  form.addEventListener("submit", submitFormHandler);

  const cancelButton = document.createElement("button");
  cancelButton.setAttribute("type", "button");
  cancelButton.textContent = "Cancel";
  cancelButton.addEventListener("click", cancelButtonClickHandler);

  form.appendChild(projectNameLabel);
  form.appendChild(projectNameInput);
  // form.appendChild(tagSelectLabel);
  // form.appendChild(tagSelect);

  form.appendChild(submitButton);
  form.appendChild(cancelButton);

  return form;
}

//Add project button click handler to make form appear when add project button clicked
function addProjectButtonClickHandler() {
  const newProject = createProject();
  projectsPage.appendChild(newProject);
}

//Submit form handler to add project
function submitFormHandler(event) {
  event.preventDefault();

  //projectTitle is = to project name input
  const projectTitle = document.querySelector("#projectNameInput").value;
  // const projectTag = document.querySelector("#tagInput").value;

  //On submit, create container for each project
  const projectsContainer = document.createElement("div");
  projectsContainer.classList.add("projectsContainer");

  //on submit, creates a div within the project container
  const projectBlock = document.createElement("div");
  projectBlock.classList.add("projectBlock");

  //Creates a delete button for each project
  const completedButton = document.createElement("button");
  completedButton.classList.add("todoCompleted");
  completedButton.textContent = "Delete";
  completedButton.addEventListener("click", removeTaskHandler);

  //Creates a heading for each project which is = to the project title
  const projectName = document.createElement("h2");
  projectName.classList.add("projectName");
  projectName.textContent = projectTitle;

  // const projectTagSpan = document.createElement("span"); //span should =
  // projectTagSpan.classList.add("projectTag");
  // projectTagSpan.textContent = projectTag;

  projectsContainer.appendChild(projectBlock);
  projectBlock.appendChild(completedButton);
  projectBlock.appendChild(projectName);
  // projectBlock.appendChild(projectTagSpan);

  projectsPage.appendChild(projectsContainer);

  document.querySelector("#projectNameInput").value = "";
  // document.querySelector("#tagInput").value = "";

  projectsPage.removeChild(form);
}

function cancelButtonClickHandler() {
  projectsPage.removeChild(form);
}

function removeTaskHandler() {
  projectsPage.removeChild(this.parentElement.parentElement); // this refers to the button that was clicked
}

const projectNameLabel = document.createElement("label");
projectNameLabel.textContent = "Title:";
const projectNameInput = document.createElement("input");
// projectNameInput.addEventListener("input", updateTagInput);
projectNameInput.setAttribute("type", "text");
projectNameInput.setAttribute("id", "projectNameInput");

export function updateProjectChoiceInput() {
  const projectTitle = projectNameInput.value.trim();
  const projectChoice = projectChoiceInput;

  if (projectTitle !== "") {
    const option = document.createElement("option");
    option.textContent = projectTitle;
    option.value = projectTitle;
    projectChoice.appendChild(option);
  }
}

// const tagSelectLabel = document.createElement("label");
// tagSelectLabel.textContent = "Tag:";
// const tagSelect = document.createElement("select");
// tagSelect.setAttribute("id", "tagInput");

const submitButton = document.createElement("button");
submitButton.setAttribute("type", "submit");
submitButton.textContent = "Submit";
submitButton.addEventListener("click", updateProjectChoiceInput);

projectsPage.appendChild(addProjectButton);
export function getProjectsPage() {
  return projectsPage;
}
