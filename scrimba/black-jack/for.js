// ------ Used for counting in JS ------ //

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (i = 10; i <= 100; i += 10) {
//   console.log("Loggin out\n", i);
// }

// ========= Iterate through the array and show each message into the console ========= //

// let messages = [
//   "Hey, how's it going?",
//   "I'm great, thank you! How about you?",
//   "All good. Been working on my portfolio lately.",
//   "Same here!",
// ];

// for (let i = 0; i < messages.length; i++) {
//   let individual = messages[i];
//   console.log(individual);
// }

/**** 
 
 * Create a for loop that logs out all the cards in the array
 * Use cards.length to specify how long the loop should run

****/

// let cards = [7, 3, 9];

// for (let i = 0; i < cards.length; i++) {
//   const element = cards[i];
//   console.log(element);
// }

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

let sentence = ["Hello", "my", "name", "is", "Per"];
let greetingEl = document.getElementById("greeting-el");

for (let i = 0; i < sentence.length; i++) {
  greetingEl.textContent += sentence[i];
}

// ========= it worked 🙌 ========= //
