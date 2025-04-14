import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getRandomItem(array){
  return array[Math.floor(Math.random() * array.length)];
}


window.onload = function() {
  //write your code here
  
  //vectors of the elements of the card
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let suit = ["♦", "♠", "♥", "♣"];

  //getting a random value from the arrays
  let randomNumber = getRandomItem(numbers);
  let randomSuit = getRandomItem(suit);

  // Setting a color for the suits (red ♥ y ♦, black ♣ y ♠)
  let colorClass = (randomSuit === "♥" || randomSuit === "♦") ? "red" : "black";


  let topSuit = document.getElementById("top-suit");
  topSuit.innerHTML = randomSuit;
  topSuit.className = colorClass;

  let bottomSuit = document.getElementById("bottom-suit");
  bottomSuit.innerHTML = randomSuit;
  bottomSuit.className = colorClass;

  let cardNumber = document.getElementById("cardNumber");
  cardNumber.innerHTML = randomNumber;
  cardNumber.className = colorClass;

}
