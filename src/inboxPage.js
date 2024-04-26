const inboxDiv = document.createElement("div");
inboxDiv.classList.add("inboxDiv");

const inboxHeading = document.createElement("h1");
inboxHeading.classList.add("inboxHeading");
inboxHeading.textContent = "Inbox";
inboxDiv.appendChild(inboxHeading);
export function getInboxPage() {
  return inboxDiv;
}
