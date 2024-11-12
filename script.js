// Variables for the DOM elements

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

function addWordToDOM() {
  const random = Math.floor(Math.random() * words.length);
  const randomWord = words[random];
  const wordElement = document.getElementById("word");
  wordElement.textContent = randomWord;
}
addWordToDOM();

function updateScore() {
  const scoreElement = document.getElementById("score");
  const score = parseInt(scoreElement.textContent);
  const newScore = score + 1;
  scoreElement.textContent = newScore;
}

function updateTime() {
  const timeElement = document.getElementById("time");
  const time = parseInt(timeElement.textContent);
  const newTime = time + 5;
  timeElement.textContent = newTime;

  if (newTime <= 0) {
    alert("Game Over!");
  }
}

const input = document.querySelector("input");

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const wordElement = document.getElementById("word");
    const userInput = input.value.toLowerCase();
    const randomWord = wordElement.textContent.toLowerCase();

    if (userInput === randomWord) {
      updateScore();
      addWordToDOM();
      updateTime();
      input.value = "";
    }
  }
});
