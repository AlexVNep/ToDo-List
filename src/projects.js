const projectsPage = document.createElement("div");
projectsPage.classList.add("projectsPage");

const projectsTitle = document.createElement("h1");
projectsTitle.classList.add("projectsTitle");
projectsTitle.textContent = "Projects";
projectsPage.appendChild(projectsTitle);

//create projects button element
const addProjectButton = document.createElement("button");
addProjectButton.classList.add("addProjectButton");
addProjectButton.textContent = "Add Project";
addProjectButton.addEventListener("click", addProjectButtonClickHandler);

let form;

function createProject() {
  form = document.createElement("form");
  form.addEventListener("submit", submitFormHandler);

  const cancelButton = document.createElement("button");
  cancelButton.setAttribute("type", "button");
  cancelButton.textContent = "Cancel";
  cancelButton.addEventListener("click", cancelButtonClickHandler);

  form.appendChild(projectNameLabel);
  form.appendChild(projectNameInput);

  form.appendChild(submitButton);
  form.appendChild(cancelButton);

  return form;
}

function addProjectButtonClickHandler() {
  const newProject = createProject();
  projectsPage.appendChild(newProject);
}

function submitFormHandler(event) {
  event.preventDefault();

  const projectTitle = document.querySelector("#projectNameInput").value;

  const projectsContainer = document.createElement("div");
  projectsContainer.classList.add("projectsContainer");

  const projectBlock = document.createElement("div");
  projectBlock.classList.add("projectBlock");

  const completedButton = document.createElement("button");
  completedButton.classList.add("todoCompleted");
  completedButton.textContent = "Delete";
  completedButton.addEventListener("click", removeTaskHandler);

  const projectName = document.createElement("h2");
  projectName.classList.add("projectName");
  projectName.textContent = projectTitle;

  projectsContainer.appendChild(projectBlock);
  projectBlock.appendChild(completedButton);
  projectBlock.appendChild(projectName);

  projectsPage.appendChild(projectsContainer);

  document.querySelector("#projectNameInput").value = "";

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
projectNameInput.setAttribute("type", "text");
projectNameInput.setAttribute("id", "projectNameInput");

const submitButton = document.createElement("button");
submitButton.setAttribute("type", "submit");
submitButton.textContent = "Submit";

projectsPage.appendChild(addProjectButton);
export function getProjectsPage() {
  return projectsPage;
}
