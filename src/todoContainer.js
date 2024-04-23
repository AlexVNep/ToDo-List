const todoContainer = document.createElement("div");
todoContainer.classList.add("todo-container");

const todoTitle = document.createElement("h2");
todoTitle.classList.add("todoTitle");
todoTitle.textContent = "Testing Todo Template";
todoContainer.appendChild(todoTitle);

const taskDescription = document.createElement("p");
taskDescription.classList.add("taskDescription");
taskDescription.textContent = "This is a placeholder for this element";
todoContainer.appendChild(taskDescription);

const dueDate = document.createElement("p");
dueDate.classList.add("dueDate");
dueDate.textContent = "This will be a date set from the form 23/04/2023";
todoContainer.appendChild(dueDate);

const priority = document.createElement("p");
priority.classList.add("priority");
priority.textContent =
  "This will be a drop down list to choose from after setting it in the form";
todoContainer.appendChild(priority);
export function getTodoContainer() {
  return todoContainer;
}
