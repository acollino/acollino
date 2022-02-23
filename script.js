const menuIcon = document.querySelector("#menu-icon");
const menuBar = document.querySelector("#menu-bar");

let menuInUseTimer;

function revealMenu() {
  menuBar.classList.remove("invisible");
}

function hideMenu() {
  menuInUseTimer = setTimeout(function () {
    menuBar.classList.add("invisible");
  }, 100);
}

menuIcon.addEventListener("click", revealMenu);

menuIcon.addEventListener("mouseleave", hideMenu);

menuBar.addEventListener("mouseleave", hideMenu);

menuBar.addEventListener("mouseenter", function (e) {
  clearTimeout(menuInUseTimer);
});
