function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const texts = [
  "Duale Studentin an der DHBW",
  "Freemoverin an der BFH",
  "Content Creatorin",
  "Business Analysitin",
];

const textElement = document.getElementById("typing-text");
let index = 0;
let charIndex = 0;
let deleting = false;

function type() {
  const currentText = texts[index];

  if (!deleting) {
    textElement.textContent = currentText.substring(0, charIndex++);
    if (charIndex > currentText.length) {
      deleting = true;
      setTimeout(type, 2000);
      return;
    }
  } else {
    textElement.textContent = currentText.substring(0, charIndex--);
    if (charIndex < 0) {
      deleting = false;
      index = (index + 1) % texts.length;
    }
  }

  setTimeout(type, deleting ? 50 : 100);
}

type();
