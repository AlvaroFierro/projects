// Counter for the number of times the user has clicked the button
let homeScore = 0;
let guestScore = 0;

// Getting the id of the p that's gonna show the score
let scoreElHome = document.getElementById("home");
let scoreElGuest = document.getElementById("guest");

// Getting the id of the 'home' buttons
let homeAddOne = document.getElementById("add-one-home");
let homeAddTwo = document.getElementById("add-two-home");
let homeAddThree = document.getElementById("add-three-home");

// Getting the id of the 'guest' buttons
let guestAddOne = document.getElementById("add-one-guest");
let guestAddTwo = document.getElementById("add-two-guest");
let guestAddThree = document.getElementById("add-three-guest");

// Home event listeners
homeAddOne.addEventListener("click", () => {
  homeScore += 1;
  scoreElHome.innerHTML = homeScore;
});

homeAddTwo.addEventListener("click", () => {
  homeScore += 2;
  scoreElHome.textContent = homeScore;
});

homeAddThree.addEventListener("click", () => {
  homeScore += 3;
  scoreElHome.textContent = homeScore;
});

// Guest event listeners
guestAddOne.addEventListener("click", () => {
  guestScore += 1;
  scoreElGuest.textContent = guestScore;
});

guestAddTwo.addEventListener("click", () => {
  guestScore += 2;
  scoreElGuest.textContent = guestScore;
});

guestAddThree.addEventListener("click", () => {
  guestScore += 3;
  scoreElGuest.textContent = guestScore;
});

// New game button
let newGame = document.getElementById("new-game");

newGame.addEventListener("click", () => {
  homeScore = 0;
  guestScore = 0;
  scoreElHome.textContent = homeScore;
  scoreElGuest.textContent = guestScore;
});
