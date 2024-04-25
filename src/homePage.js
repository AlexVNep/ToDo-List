const homePage = document.createElement("div");
homePage.classList.add("homePage");

const homePageTitle = document.createElement("h1");
homePageTitle.classList.add("homePageTitle");
homePageTitle.textContent = "Home";
homePage.appendChild(homePageTitle);

export function getHomePage() {
  return homePage;
}
