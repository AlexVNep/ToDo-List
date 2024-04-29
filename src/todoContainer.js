import { Todo } from "./todoModule";

const addTaskPage = document.createElement("div");
addTaskPage.classList.add("addTaskPage");

const addTaskTitle = document.createElement("h1");
addTaskTitle.classList.add("addTaskTitle");
addTaskTitle.textContent = "Tasks";
addTaskPage.appendChild(addTaskTitle);

// Create button element
const button = document.createElement("button");
button.classList.add("addTaskButton");
button.textContent = "Add Todo";
button.addEventListener("click", addTaskButtonClickHandler);

let form; // form needs to be accessible in removeTaskHandler

function createForm() {
  form = document.createElement("form");
  form.addEventListener("submit", submitFormHandler);

  const cancelButton = document.createElement("button");
  cancelButton.setAttribute("type", "button");
  cancelButton.textContent = "Cancel";
  cancelButton.addEventListener("click", cancelButtonClickHandler);

  form.appendChild(titleLabel);
  form.appendChild(titleInput);

  form.appendChild(dueDateLabel);
  form.appendChild(dueDateInput);
  form.appendChild(priorityLabel);
  form.appendChild(priorityInput);
  form.appendChild(submitButton);
  form.appendChild(cancelButton);

  return form;
}

function addTaskButtonClickHandler() {
  const newForm = createForm();
  addTaskPage.appendChild(newForm);
}

function submitFormHandler(event) {
  event.preventDefault();

  const completed = document.querySelector("#completedInput");
  const title = document.querySelector("#titleInput").value;
  const dueDate = document.querySelector("#dueDateInput").value;
  const priority = document.querySelector("#priorityInput").value;

  const todo = new Todo(completed, title, dueDate, priority);

  const taskContainer = document.createElement("div");
  taskContainer.classList.add("taskContainer");

  const todoContainer = document.createElement("div");
  todoContainer.classList.add("todo-container");

  const completedButton = document.createElement("button");
  completedButton.classList.add("todoCompleted");
  completedButton.textContent = "Complete";
  completedButton.addEventListener("click", removeTaskHandler);

  const titleElement = document.createElement("h2");
  titleElement.classList.add("todoTitle");
  titleElement.textContent = todo.title;

  const dueDateElement = document.createElement("p");
  dueDateElement.classList.add("todoDueDate");
  dueDateElement.textContent = todo.dueDate;

  const priorityElement = document.createElement("p");
  priorityElement.classList.add("todoPriority");
  priorityElement.textContent = todo.priority;

  taskContainer.appendChild(todoContainer);
  todoContainer.appendChild(completedButton);
  todoContainer.appendChild(titleElement);
  todoContainer.appendChild(dueDateElement);
  todoContainer.appendChild(priorityElement);

  addTaskPage.appendChild(taskContainer);

  document.querySelector("#titleInput").value = "";
  document.querySelector("#dueDateInput").value = "";
  document.querySelector("#priorityInput").value = "";

  addTaskPage.removeChild(form);
}

function cancelButtonClickHandler() {
  addTaskPage.removeChild(form);
}

function removeTaskHandler() {
  addTaskPage.removeChild(this.parentElement.parentElement); // this refers to the button that was clicked
}

// Create title input and label
const titleLabel = document.createElement("label");
titleLabel.textContent = "Title:";
const titleInput = document.createElement("input");
titleInput.setAttribute("type", "text");
titleInput.setAttribute("id", "titleInput");

// Create due date input and label
const dueDateLabel = document.createElement("label");
dueDateLabel.textContent = "Due Date:";
const dueDateInput = document.createElement("input");
dueDateInput.setAttribute("type", "date");
dueDateInput.setAttribute("id", "dueDateInput");

// Create priority input and label
const priorityLabel = document.createElement("label");
priorityLabel.textContent = "Priority:";
const priorityInput = document.createElement("select");
const priorityInput1 = document.createElement("option");
const priorityInput2 = document.createElement("option");
const priorityInput3 = document.createElement("option");
priorityInput1.textContent = "Low";
priorityInput2.textContent = "Medium";
priorityInput3.textContent = "High";
priorityInput.appendChild(priorityInput1);
priorityInput.appendChild(priorityInput2);
priorityInput.appendChild(priorityInput3);
priorityInput.setAttribute("type", "text");
priorityInput.setAttribute("id", "priorityInput");

// Create submit button
const submitButton = document.createElement("button");
submitButton.setAttribute("type", "submit");
submitButton.textContent = "Submit";

// Add button to the DOM
addTaskPage.appendChild(button);

export function getAddTask() {
  return addTaskPage;
}
