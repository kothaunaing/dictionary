import { words } from "../data/words-data.js";
let foundWords = [];

function searchWords() {
  const userInput = document.querySelector(".user-input").value.toLowerCase() || 0;

  foundWords = words.filter((word) => {
    const { en } = word;
    return en.toLowerCase().includes(userInput);
  });
}

document.querySelector(".search-btn").addEventListener("click", () => {
  searchWords();
  wordHTML();
});

document.querySelector(".user-input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchWords();
    wordHTML();
  }
});

function wordHTML() {
  let html = "";
  foundWords.sort((a, b) => {
    return a.en.localeCompare(b.en);
  });

  foundWords.forEach((word) => {
    const { en, state, mm } = word;
    html += `
    <div class="word-container">
    <div class="word">
      <div>${en}</div>
      <div>(${state})</div>
    </div>
    <div class="meaning">
      ${mm}
    </div>
    </div>
  `;
  });

  document.querySelector(".display-section").innerHTML = html;
}
