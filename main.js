const card = document.querySelectorAll("div[data-unread='true']");
const markAllRead = document.querySelector(".mark-as-read");
const notificationBadge = document.querySelector(".notification-count");

const unread = Array.from(card);

unread.forEach((item) => {
  item.addEventListener("click", () => {
    setUnread(item);
  });
});

markAllRead.addEventListener("click", () => {
  unread.forEach((item) => {
    setUnread(item);
  });
});

function setUnread(item) {
  if (item.getAttribute("data-unread") === "true") {
    item.setAttribute("data-unread", "false");
    unread.pop();
    notificationBadge.textContent = unread.length;
  }
}
