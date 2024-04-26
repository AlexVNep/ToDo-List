const projectsPage = document.createElement("div");
projectsPage.classList.add("projectsPage");

const projectsTitle = document.createElement("h1");
projectsTitle.classList.add("projectsTitle");
projectsTitle.textContent = "Projects";
projectsPage.appendChild(projectsTitle);

export function getProjectsPage() {
  return projectsPage;
}
