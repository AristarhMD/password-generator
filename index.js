// General Data
const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const symbols = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Selecting elements for generation and inseting password
const btnEl = document.querySelector(".btn");
const passwordOneEl = document.querySelector(".password-one");
const passwordTwoEl = document.querySelector(".password-two");

// Toggler of the mode
const containerEl = document.querySelector(".container");
const subHeaderEl = document.querySelector(".sub-header");
const modeTogglerEl = document.querySelector(".mode-toggler");

// SVG elements for toggling of the mode
const lightEl = document.querySelector("#light");
const darkEl = document.querySelector("#dark");

// Option container
const lenghtEl = document.querySelector("#lenght");
const radioOptionEl = document.querySelector(".charter-option");
const radioImgEl = document.querySelectorAll(".radio-img");
const radioEls = document.querySelectorAll('input[name="option"]');

// Lenght checker
const standartLenght = 15;
let requestedLenght;
let disponibleLenght = 90;
let radioSelection = characters;

// Listener to update of input
lenghtEl.addEventListener("input", function (e) {
  let inputValue = Number(e.target.value);
  if (inputValue > 0) {
    requestedLenght = inputValue;
  } else {
    requestedLenght = standartLenght;
  }
});

// Listener for radio btn change
radioEls.forEach((radioEl) => {
  radioEl.addEventListener("change", function (e) {
    if (e.target.value === "symbols") {
      disponibleLenght = symbols.length - 1;
      radioSelection = symbols;
    } else if (e.target.value === "number") {
      disponibleLenght = numbers.length - 1;
      radioSelection = numbers;
    } else {
      disponibleLenght = characters.length - 1;
      radioSelection = characters;
    }
  });
});

// Generation and inserting of the password
btnEl.addEventListener("click", function () {
  let passwordOne = "";
  let passwordTwo = "";
  if (requestedLenght <= standartLenght) {
    for (let i = 0; i < requestedLenght; i++) {
      passwordOne += radioSelection[randomChar(disponibleLenght)];
      passwordTwo += radioSelection[randomChar(disponibleLenght)];
    }
  } else {
    for (let i = 0; i < standartLenght; i++) {
      passwordOne += radioSelection[randomChar(disponibleLenght)];
      passwordTwo += radioSelection[randomChar(disponibleLenght)];
    }
  }

  passwordOneEl.textContent = passwordOne;
  passwordTwoEl.textContent = passwordTwo;
});

// Generation of random number
function randomChar(lenght) {
  return Math.floor(Math.random() * lenght) + 1;
}

// Toggler of the SVG (light / dark mode)
modeTogglerEl.addEventListener("click", function () {
  lightEl.classList.toggle("hide");
  darkEl.classList.toggle("hide");
  invertColors();
});

// Toggler of classes for container and sub-header
function invertColors() {
  containerEl.classList.toggle("invert-container");
  subHeaderEl.classList.toggle("invert-header");
  radioOptionEl.classList.toggle("invert-character-option");
  for (let i = 0; i < radioImgEl.length; i++) {
    radioImgEl[i].classList.toggle("invert-img");
  }
}
