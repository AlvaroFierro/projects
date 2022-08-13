let fighters = [
  "🐉",
  "🐥",
  "🐊",
  "💩",
  "🦍",
  "🐢",
  "🐩",
  "🦭",
  "🦀",
  "🐝",
  "🤖",
  "🐘",
  "🐸",
  "🕷",
  "🐆",
  "🦕",
  "🦁",
];

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

fightButton.addEventListener("click", () => {
  let firstPlayerIndex = Math.floor(Math.random() * fighters.length);
  let secondPlayerIndex = Math.floor(Math.random() * fighters.length);

  let displayPlayers = `${fighters[firstPlayerIndex]} vs ${fighters[secondPlayerIndex]}`;
  stageEl.textContent = displayPlayers;
});
