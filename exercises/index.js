// const firstNames = ["Jon", "Arya", "Jamie"];
// const lastNames = ["Snow", "Stark", "Lannister"];
// const places = ["The Wall", "Winterfell", "Kings Landing"];

// const bios = [];

// // Loop through your arrays and store the following strings in the bios array:
// // 'My name is Jon Snow and I am from The Wall'
// // 'My name is Arya Stark and I am from Winterfell'
// // 'My name is Jamie Lannister and I am from Kings Landing'

// // ADD CODE HERE
// for (
//   let i = 0;
//   i < firstNames.length && i < lastNames.length && i < places.length;
//   i++
// ) {
//   console.log(
//     `My name is ${firstNames[i]} ${lastNames[i]} and I am from ${places[i]}`
//   );
// }

// Use a loop to iterate through the numbers 1 through x. Push each number into fb, but push the string "fizz" in place of numbers divisible by 3, "buzz" in place of numbers divisible by 5, and "fizzbuzz" in place of numbers divisible by both 3 and 5.
// Log fb to the console to see the output.
// Hint: Check out the remainder/modulo operator: %.

const fb = [];

let maxNumber = 1000;

for (i = 1; i < maxNumber; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    fb.push("fizzbuzz");
  } else if (i % 5 === 0) {
    fb.push("buzz");
  } else if (i % 3 === 0) {
    fb.push("fizz");
  } else {
    fb.push(i);
  }
}
console.log(fb);
