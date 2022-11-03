const menuIcon = document.querySelector("#menu-icon");
const menuBar = document.querySelector("#menu-bar");
const menuButtons = Array.from(
  document.querySelectorAll("#menu-bar .jump-link-button")
);

function revealMenu() {
  menuBar.classList.remove("shrunk");
  menuIcon.classList.add("menu-icon-expanded");
}

function hideMenu() {
  menuBar.classList.add("shrunk");
  menuIcon.classList.remove("menu-icon-expanded");
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

function scrollToID(id) {
  let target;
  if (id === "top") {
    target = document.body;
  } else {
    target = document.querySelector(`#${id}`);
  }
  target.scrollIntoView({ behavior: "smooth" });
}

menuIcon.addEventListener("click", revealMenu);

document.body.addEventListener("click", (evt) => {
  if (evt.target != menuIcon && !menuButtons.includes(evt.target)) {
    hideMenu();
  }
});

addFadeEvents();

document
  .querySelector(".avatar-container")
  .addEventListener("mouseenter", (evt) => {
    document
      .querySelector("#avatar")
      .setAttribute("src", "./assets/8_bit_avatar_eyebrows.png");
  });

document
  .querySelector(".avatar-container")
  .addEventListener("mouseleave", (evt) => {
    document
      .querySelector("#avatar")
      .setAttribute("src", "./assets/8_bit_avatar.png");
  });
