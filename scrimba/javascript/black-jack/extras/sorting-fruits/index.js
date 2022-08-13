let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
let appleEl = document.getElementById("apple-shelf");
let orangeEl = document.getElementById("orange-shelf");

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

let sortingValues = () => {
  for (let i = 0; i < fruit.length; i++) {
    const element = fruit[i];
    if (element === "🍎") {
      appleEl.textContent += element;
    } else if (element === "🍊") {
      orangeEl.textContent += element;
    }
  }
};

sortingValues();
