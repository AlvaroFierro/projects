/**** 
 * Create a person object that contains three keys: name, age, and county.
 * Use yourself as an example to set the values for name, age, and country
 * Create a function, logData(), that uses the person object to create a string in the following format:
 * "Per is 35 years old and lives in Norway"
 * Call the logData() function to verify that it works

****/

// ---------------------- Objects ---------------------- //

let person = {
  name: "Alvaro",
  age: 19,
  country: "Mexico",
};

function logData() {
  return `${person.name} is ${person.age} years old and lives in ${person.country}`;
}

console.log(logData());

// ---------------------- .this property ---------------------- //

// let person = {
//   name: "Alvaro",
//   age: 19,
//   country: "Mexico",
//   sentence: function () {
//     return `${this.name} is ${this.age} years old and lives in ${this.country}`;
//   },
// };

// let fullSentence = person.sentence();
// console.log(fullSentence);

// ---------------------- if else ---------------------- //

let age = 15;

/****
 
 * less than 6 years old -> free
 * 6 to 17 years old     -> child discount
 * 18 to 26 years old    -> student discount
 * 27 to 66 years old    -> full price
 * over 66 years old     -> senior citizen discount
 * Create a conditional statement (if/else/else if) that logs out the discount
 * the passenger will get based upon the value of the age variable
 
 ****/

if (age < 6) {
  console.log("free");
} else if (age <= 17) {
  console.log("child discount");
} else if (age <= 26) {
  console.log("student discount");
} else if (age <= 66) {
  console.log("full price");
} else {
  console.log("senior citizen discount");
}

// ---------------------- loops & arrays ---------------------- //
// Use a for loop to log each country

console.log("The largest Countries in the world");
let largestCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];
for (let i = 0; i < largestCountries.length; i++) {
  let loop = `- ${largestCountries[i]}`;
  console.log(loop);
}

// ---------------------- fixing arrays ... ---------------------- //

let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];
console.log(`Original array => ${largeCountries}`);

// You need to help me fixup the largeCountries array so that
// China[0] and Pakistan[5] are added back into their respective places
// Use push() & pop() and their counterparts unshift() & shift()

largeCountries.pop();
largeCountries.shift();
largeCountries.unshift("China");
largeCountries.push("Pakistan");

console.log(`Final array => ${largeCountries}`);

// ---------------------- AND operator ---------------------- //
let dayOfMonth = 13;
let weekday = "Friday";

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&

if (dayOfMonth === 13 && weekday === "Friday") {
  console.log("😱");
}
