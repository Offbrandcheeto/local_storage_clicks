"use strict";

let clicks = 0;

const clicksDisplay = document.getElementById("display-clicks");
const mainBtn = document.getElementById("main-btn");
const saveBtn = document.getElementById("save-btn");
const clearBtn = document.getElementById("clear-btn");

displaySavedClicks();

// Event listeners

mainBtn.addEventListener("click", function () {
  clicks++;
  console.log(clicks);
});

saveBtn.addEventListener("click", function () {
  const savedClicks = localStorage.setItem("savedClicks", `${clicks}`);
});

clearBtn.addEventListener("click", function () {
  if (localStorage.getItem("savedClicks")) {
    localStorage.clear("savedClicks");
    clicks = 0;
  }
});

// Update game function

const updateGame = setInterval(() => {
  clicksDisplay.textContent = `Clicks: ${clicks}`;
}, 10);

// Function for displaying local storage value on refresh

function displaySavedClicks() {
  // Checks to see if there is a value
  if (localStorage.getItem("savedClicks")) {
    clicks = localStorage.getItem("savedClicks");
  }
}
