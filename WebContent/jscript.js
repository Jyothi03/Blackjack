// Blackjack

// by Shiva

//



let suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs']; // creating all suits
let values = ['Ace', 'King', 'Queen', 'Jack',
  'ten', 'nine', 'eight', 'seven', 'six',
  'five', 'four', 'three', 'two'
];

let textArea = document.getElementById('text-area');
let newGamebutton = document.getElementById('new-game');
let hitButton = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button');


hitButton.style.display='none';
stayButton.style.display='none';

  newGameButton.addEventListener('click', function(){
  textArea.innerText='Started..';
  newGAmeButton.style.display='inline';
  hitButton.style.display='inline';
  
});

let deck = []; // creating the deck of cards
function createDeck() {
  let deck = [];
  for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) { // going to loop through all the suits
    for (let valueIdx = 0; valueIdx < values.length; valueIdx++) { // going to loop through all the values
      let card = {
        suit: suits[suitIdx], // pasing objects to functions
        value: values[valueIdx]
      };
      deck.push(card);
      //     deck.push(values[valueIdx] + ' of ' + suits[suitIdx]);     // calling push function
    }
  }
  return deck;
}
function getCardString(card) {
  return card.value + ' of ' + card.suit;
}
function getNextCard() {
  return deck.shift();
}
 let deck = createDeck();
//for( let i=0; i< deck.length; i++){         //to check if deck loop is created correctly
//  console.log(deck[i]);
//}
//let playerCards=(deck[0], deck[1]);

let playerCards = [getNextCard(), getNextCard()];
console.log(" Welcome to Blackjack!");
console.log(" You are dealt");
console.log(" ", getCardString(playerCards[0]));
console.log(" ", getCardString(playerCards[2]));



//console.log(deck[0], deck[2]);