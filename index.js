let player = {
  name:"Raquel",
  chips: 200
}

let cards =[];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
//console.log(messageEl); 
let sumEl =document.getElementById("sum-el");
//console.log(sumEl);
let cardsEl = document.getElementById("cards-el");
//console.log(cardsEl);
let playerEl = document.getElementById("player-el");
//console.log(playerEl);
playerEl.textContent = player.name + ": $" + player.chips;

console.log(cards);

function getRandomCard(){
  let randomNumber = Math.floor(Math.random()*13)+1;
  if (randomNumber > 10 ) {
    return 10
  } else if (randomNumber === 1){
    return 11 
  } else {
    return randomNumber
  }
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum= firstCard + secondCard;

    renderGame()
}

function renderGame(){
cardsEl.textContent = "Cards:"

for (let i = 0; i < cards.length; i ++ ) {
cardsEl.textContent += cards[i] + " "
}

sumEl.textContent = "Sum:"+ sum;
if(sum <21) {
    message ="Do you want to draw a new card?"
} else if (sum === 21) {
message = "You've got BlackJack!"  
hasBlackJack = true
} else {
    message ="You are out of the game!"
    isAlive = false;
}

messageEl.textContent= message;

}

function newCard(){

   if (isAlive === true && hasBlackJack === false ) {
    let newCard = getRandomCard();
    sum += newCard ;
    cards.push(newCard);
    console.log(cards);
    renderGame()
   }   
} 



