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

let countDown;
let timeInterval = 1000;

function addWordToDOM() {
  const random = Math.floor(Math.random() * words.length);
  const randomWord = words[random];
  const wordElement = document.getElementById("word");
  wordElement.textContent = randomWord;
}
addWordToDOM();
updateTime();

function updateScore() {
  const scoreElement = document.getElementById("score");
  const score = parseInt(scoreElement.textContent);
  scoreElement.textContent = score + 1;
}

function incrementTime() {
  const timeElement = document.getElementById("time");
  const time = parseInt(timeElement.textContent);
  timeElement.textContent = time + 5;
}

function decrementTime() {
  const timeElement = document.getElementById("time");
  const time = parseInt(timeElement.textContent);

  if (time > 0) {
    timeElement.textContent = time - 1;
  } else {
    gameOver();
  }
}

function updateTime() {
  clearInterval(countDown);
  countDown = setInterval(decrementTime, timeInterval);
}

function gameOver() {
  clearInterval(countDown);

  const gameOverMsg = prompt(
    "GAME OVER! Choose an option: \n 1.) PLAY AGAIN \n 2.) QUIT GAME"
  );

  if (gameOverMsg === "1") {
    let difficultyLevel;
    let validDifficulty = false;

    while (!validDifficulty) {
      difficultyLevel = prompt(
        "Choose the difficulty: \n 1.) Easy \n 2.) Medium \n 3.) Hard \n"
      );

      if (difficultyLevel === "1") {
        timeInterval = 1000;
        document.getElementById("time").textContent = "10";
        validDifficulty = true;
      } else if (difficultyLevel === "2") {
        timeInterval = 1000;
        document.getElementById("time").textContent = "7";
        validDifficulty = true;
      } else if (difficultyLevel === "3") {
        timeInterval = 1000;
        document.getElementById("time").textContent = "5";
        validDifficulty = true;
      } else {
        alert("Invalid difficulty level. Please type in: 1, 2 or 3.");
      }
    }
    resetGame();
    updateTime();
    return;
  } else if (gameOverMsg === "2") {
    alert("Thanks for playing!");
    document.getElementById("score").textContent = "0";
    return;
  } else {
    alert("Invalid input. Please type in: 1 or 2.");
    return gameOver();
  }
}

function resetGame() {
  document.getElementById("score").textContent = "0";
  addWordToDOM();
  updateTime();
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
      incrementTime();
      input.value = "";
    }
  }
});

const options = document.getElementById("settings-form");

options.addEventListener("change", function (e) {
  if (e.target.id === "difficulty") {
    const selectedDifficulty = e.target.value;

    switch (selectedDifficulty) {
      case "easy":
        timeInterval = 1000;
        document.getElementById("time").textContent = "10";
        break;
      case "medium":
        timeInterval = 1000;
        document.getElementById("time").textContent = "7";
        break;
      case "hard":
        timeInterval = 1000;
        document.getElementById("time").textContent = "5";
        break;
      default:
        alert("Invalid difficulty level");
        return;
    }
    updateTime();
  }
});

const settingsDiv = document.getElementById("settings-form");
settingsDiv.style.display = "none";

function hideAndShowSettings() {
  const settingsDiv = document.getElementById("settings-form");
  if (settingsDiv.style.display === "none") {
    settingsDiv.style.display = "block";
  } else {
    settingsDiv.style.display = "none";
  }
}
