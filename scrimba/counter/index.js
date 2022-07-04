let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let count = 0;

let increment = () => {
  count++;
  countEl.textContent = count;
};

let save = () => {
  let entries = ` ${count} -`;
  saveEl.textContent += entries;
  countEl.textContent = 0;
  count = 0;
};
