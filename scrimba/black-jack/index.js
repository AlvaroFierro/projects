let firstCard = 10;
let secondCard = 4;

cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;

let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let startGame = () => {
  renderGame();
};

let renderGame = () => {
  cardsEl.textContent = `Cards: ${cards[0]} ${cards[1]}`;

  // render out All the cards we have

  sumEl.textContent = `Sum: ${sum}`;
  if (sum <= 20) {
    message = "Do you want to draw a new car?";
  } else if (sum === 21) {
    message = "You've got BlackJack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
};

let newCard = () => {
  let card = 6;
  sum += card;
  cards.push(card);
  renderGame();
};
