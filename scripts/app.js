let menuPanel = document.querySelector(".menu-panel");
let menuActions = document.querySelectorAll(".ui-menu");

const showSidebar = () => menuPanel.classList.toggle("hidden");

menuActions.forEach((element) => {
  element.onclick = showSidebar;
});
