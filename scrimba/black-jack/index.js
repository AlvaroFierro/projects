let age = Math.floor(Math.random() * 123 + 21);
console.log(age);

const kingName = "Harald V";

if (age <= 99) {
  console.log(
    `We're sorry but you can't get a gift card from the king coz you're ${age} years old`
  );
} else if (age === 100) {
  console.log(`Congrats!\n Here you have your gift card from ${kingName} `);
} else {
  console.log(
    `You've already gotten one gift card coz you're ${age} years old`
  );
}

let card = Math.floor(Math.random(2) * 10);

console.log(card);
