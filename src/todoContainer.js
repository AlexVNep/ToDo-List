import { Todo } from "./todoModule";

const addTaskPage = document.createElement("div");
addTaskPage.classList.add("addTaskPage");

const addTaskTitle = document.createElement("h1");
addTaskTitle.classList.add("addTaskTitle");
addTaskTitle.textContent = "Tasks";
addTaskPage.appendChild(addTaskTitle);

// Create button element
const button = document.createElement("button");
button.textContent = "Add Todo";
button.addEventListener("click", () => {
  //Create form element
  const form = document.createElement("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    //Get input values
    const completed = document.querySelector("#completedInput");
    const title = document.querySelector("#titleInput").value;
    const dueDate = document.querySelector("#dueDateInput").value;
    const priority = document.querySelector("#priorityInput").value;

    // Create Todo object
    const todo = new Todo(completed, title, dueDate, priority);

    // Create task container
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("taskContainer");
    addTaskPage.appendChild(taskContainer);

    //Create todo container div
    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todo-container");

    //Completed button element
    const todoCompleted = document.createElement("button");
    todoCompleted.classList.add("todoCompleted");
    todoCompleted.textContent = "Complete";
    todoContainer.appendChild(todoCompleted);
    todoCompleted.addEventListener("click", () => {
      taskContainer.removeChild(todoContainer);
    });

    //Title element
    const todoTitle = document.createElement("h2");
    todoTitle.classList.add("todoTitle");
    todoTitle.textContent = todo.title;
    todoContainer.appendChild(todoTitle);

    //Date element
    const todoDueDate = document.createElement("p");
    todoDueDate.classList.add("todoDueDate");
    todoDueDate.textContent = todo.dueDate;
    todoContainer.appendChild(todoDueDate);

    // Priority element
    const todoPriority = document.createElement("p");
    todoPriority.classList.add("todoPriority");
    todoPriority.textContent = todo.priority;
    todoContainer.appendChild(todoPriority);

    // Add container to the DOM
    taskContainer.appendChild(todoContainer);

    // Clear form inputs
    document.querySelector("#titleInput").value = "";
    document.querySelector("#dueDateInput").value = "";
    document.querySelector("#priorityInput").value = "";

    // Remove form from the DOM
    document.body.removeChild(form);
  });

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
  submitButton.addEventListener("click", () => {
    const completed = document.querySelector("#completedInput");
    const title = document.querySelector("#titleInput").value;
    const dueDate = document.querySelector("#dueDateInput").value;
    const priority = document.querySelector("#priorityInput").value;

    const todo = new Todo(completed, title, dueDate, priority);

    // Append todo.title to projects
    const projects = document.querySelector(".projectsHeading");
    const titleElement = document.createElement("p");
    titleElement.textContent = todo.title;
    projects.appendChild(titleElement);
  });

  // Create cancel button
  const cancelButton = document.createElement("button");
  cancelButton.setAttribute("type", "button");
  cancelButton.textContent = "Cancel";
  cancelButton.addEventListener("click", () => {
    document.body.removeChild(form);
  });

  // Append elements to form
  form.appendChild(titleLabel);
  form.appendChild(titleInput);
  form.appendChild(document.createElement("br"));
  form.appendChild(dueDateLabel);
  form.appendChild(dueDateInput);
  form.appendChild(document.createElement("br"));
  form.appendChild(priorityLabel);
  form.appendChild(priorityInput);
  form.appendChild(document.createElement("br"));
  form.appendChild(submitButton);
  form.appendChild(cancelButton);

  // Add form to the DOM
  document.body.appendChild(form);
});

// Add button to the DOM
addTaskPage.appendChild(button);
export function getAddTask() {
  return addTaskPage;
}

// const taskDescription = document.createElement("p");
// taskDescription.classList.add("taskDescription");
// taskDescription.textContent = "This is a placeholder for this element";
// todoContainer.appendChild(taskDescription);
