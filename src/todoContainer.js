import { Todo } from "./todoModule";

export function createTodoElements(todo) {
  // Create button element
  const button = document.createElement("button");
  button.textContent = "Add Todo";
  button.addEventListener("click", () => {
    //Create form element
    const form = document.createElement("form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      //Get input values
      const title = document.querySelector(".titleInput").value;
      const dueDate = document.querySelector("#dueDateInput").value;
      const priority = document.querySelector("#priorityInput").value;

      // Create Todo object
      const todo = new Todo(title, dueDate, priority);

      //Create todo container div
      const todoContainer = document.createElement("div");
      todoContainer.classList.add("todo-container");

      //Title element
      const todoTitle = document.createElement("h2");
      todoTitle.classList.add("todoTitle");
      todoTitle.textContent = todo.title;
      todoContainer.appendChild(todoTitle);

      // Add container to the DOM
      document.body.appendChild(container);

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
    const priorityInput = document.createElement("input");
    priorityInput.setAttribute("type", "text");
    priorityInput.setAttribute("id", "priorityInput");

    // Create submit button
    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Submit";

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

    // Add form to the DOM
    document.body.appendChild(form);
  });

  // Add button to the DOM
  document.body.appendChild(button);
}

// const taskDescription = document.createElement("p");
// taskDescription.classList.add("taskDescription");
// taskDescription.textContent = "This is a placeholder for this element";
// todoContainer.appendChild(taskDescription);

// const dueDate = document.createElement("p");
// dueDate.classList.add("dueDate");
// dueDate.textContent = "This will be a date set from the form 23/04/2023";
// todoContainer.appendChild(dueDate);

// const priority = document.createElement("p");
// priority.classList.add("priority");
// priority.textContent =
//   "This will be a drop down list to choose from after setting it in the form";
// todoContainer.appendChild(priority);
