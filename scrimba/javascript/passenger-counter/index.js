let counterEl = document.getElementById("counter");
let increaseEl = document.getElementById("increase");
let resetEl = document.getElementById("reset");
let decreaseEl = document.getElementById("decrease");
let saveEl = document.getElementById("save");
let entriesEl = document.getElementById("entries-el");
let count = 0;

increaseEl.addEventListener("click", () => {
  count++;
  counterEl.textContent = count;
});

resetEl.addEventListener("click", () => {
  count = 0;
  counterEl.textContent = count;
});

decreaseEl.addEventListener("click", () => {
  count--;
  counterEl.textContent = count;
});

saveEl.addEventListener("click", () => {
  let entries = ` ${count} -`;
  entriesEl.textContent += entries;
  counterEl.textContent = 0;
  count = 0;
});
