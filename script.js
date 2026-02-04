const text = [
  "Hey Soumya (Anu) ❤️",
  "I just want you to know…",
  "You are my favorite person 🥹",
  "My safe place 🌸",
  "My forever 💖"
];

let index = 0;
let charIndex = 0;
const speed = 70;
const typewriter = document.getElementById("typewriter");

function typeEffect() {
  if (charIndex < text[index].length) {
    typewriter.innerHTML += text[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, speed);
  } else {
    setTimeout(nextLine, 1500);
  }
}

function nextLine() {
  typewriter.innerHTML = "";
  charIndex = 0;
  index = (index + 1) % text.length;
  typeEffect();
}

typeEffect();

/* 💖 Heart Generator */
const heartContainer = document.querySelector(".hearts");

setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}, 300);