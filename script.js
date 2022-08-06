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

function addFadeEvents() {
  let hiddenArray = document.querySelectorAll(".hidden-container");
  for (let hiddenBox of hiddenArray) {
    hiddenBox.addEventListener("mouseenter", () => {
      hiddenBox.classList.remove("rapid-hide");
      hiddenBox.classList.add("slow-reveal");
      hiddenBox.classList.toggle("opaque");
      hiddenBox.previousElementSibling.classList.toggle("transparent");
    });
    hiddenBox.addEventListener("mouseleave", () => {
      hiddenBox.classList.remove("slow-reveal");
      hiddenBox.classList.add("rapid-hide");
      hiddenBox.classList.toggle("opaque");
      hiddenBox.previousElementSibling.classList.toggle("transparent");
    });
  }
}

menuIcon.addEventListener("click", revealMenu);

menuIcon.addEventListener("mouseleave", hideMenu);

menuBar.addEventListener("mouseleave", hideMenu);

menuBar.addEventListener("mouseenter", function (e) {
  clearTimeout(menuInUseTimer);
});

addFadeEvents();

document.querySelector(".avatar-container").addEventListener("mouseenter", (evt) => {
  document.querySelector("#avatar").setAttribute("src", "/assets/8_bit_avatar_eyebrows.png");
});

document.querySelector(".avatar-container").addEventListener("mouseleave", (evt) => {
  document.querySelector("#avatar").setAttribute("src", "/assets/8_bit_avatar.png");
});
