const todayPage = document.createElement("div");
todayPage.classList.add("todayPage");

const todayTitle = document.createElement("h1");
todayTitle.classList.add("todayTitle");
todayTitle.textContent = "Today";
todayPage.appendChild(todayTitle);
export function getTodayPage() {
  return todayPage;
}
