// let countEl = document.getElementById("count-el");
// let saveEl = document.getElementById("save-el");

// let count = 0;

// let increment = () => {
//   count++;
//   countEl.textContent = count;
// };

// let save = () => {
//   let entries = ` ${count} -`;
//   saveEl.textContent += entries;
//   countEl.textContent = 0;
//   count = 0;
// };

let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let sumEl = document.getElementById("sum-el");

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

function add() {
  let sum = num1 + num2;
  sumEl.textContent = `Sum: ${sum}`;
}

function subtract() {
  let sum = num1 - num2;
  sumEl.textContent = `Sum: ${sum}`;
}

function divide() {
  let sum = num1 / num2;
  sumEl.textContent = `Sum: ${sum}`;
}

function multiply() {
  let sum = num1 * num2;
  sumEl.textContent = `Sum: ${sum}`;
}
