let scoreHome = 0;
let scoreGuest = 0;
let scoreElHome = document.getElementById("home");
let scoreElGuest = document.getElementById("guest");

let addOneHome = () => {
  scoreHome += 1;
  scoreElHome.textContent = scoreHome;
};
let addOneGuest = () => {
  scoreGuest += 1;
  scoreElGuest.textContent = scoreGuest;
};
let addTwoHome = () => {
  scoreHome += 2;
  scoreElHome.textContent = scoreHome;
};
let addTwoGuest = () => {
  scoreGuest += 2;
  scoreElGuest.textContent = scoreGuest;
};
let addThreeHome = () => {
  scoreHome += 3;
  scoreElHome.textContent = scoreHome;
};
let addThreeGuest = () => {
  scoreGuest += 3;
  scoreElGuest.textContent = scoreGuest;
};
