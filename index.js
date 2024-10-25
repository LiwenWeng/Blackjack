// Build a BlackJack Game

// variables representing two cards 
let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard;

const cards = [];
let hasBlackjack = false;
let isAlive = false;
let message = "Do you want to draw a new card? 🙂";

const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.getElementById("cards-el");

// message = "Do you want to draw a new card? 🙂"
// message = "Wohoo! You've got Blackjack! 🥳"
// message = "You're out of the game! 😭"

const renderGame = () => {
    cards.forEach((v) => {
        cardsEl.textContent += v;
    })

    sum = cards.reduce((a, b) => a + b);
    if (sum < 21) {
        message = "Do you want to draw a new card? 🙂";
    } else if (sum > 21) {
        message = "You're out of the game! 😭";
        isAlive = false;
    } else {
        message = "Wohoo! You've got Blackjack! 🥳";
        hasBlackjack, isAlive = true;
    }
}

const newCard = () => {
    let card = getRandomCard();
    cards.push(card);
    renderGame();
}

const startGame = () => {
    isAlive = true;
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    cards.push(firstCard, secondCard);
    renderGame();
}

const getRandomCard = () => {
    
}