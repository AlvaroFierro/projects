// 2. Create the player object. Give it two keys, name and chips, and set their values

let player = {
  name: "Alvaro",
  chips: 150,
};

let firstCard = getRandomCard();
let secondCard = getRandomCard();

cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");

// 3. Grab ahold of the player-el paragraph and store it in a variable called playerEl
let cardsEl = document.getElementById("cards-el");
// 4. Render the player's name and chips in playerEl

let playerEl = document.getElementById("player-el");
playerEl.textContent = `${player.name}: $ ${player.chips}`;

/*
 Make this function return a random number between 1-13 
 but if 1 => return  11
 if 11-13 => return 10
 else return number
*/

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 11;
  } else if (randomNumber === 1) {
    return 10;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  // Generate two random numbers
  let firstCard = Math.floor(Math.random() * 13) + 1;
  let secondCard = Math.floor(Math.random() * 13) + 1;
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  // Re-assign the cards and sum variables so that the game can start

  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += ` ${cards[i]}`;
  }

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
}

function newCard() {
  // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
