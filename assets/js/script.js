//vars
//  select dom elements\
var startButton = document.querySelector(".start-button")
var resetButton = document.querySelector(".reset-button")
var timerEL = document.querySelector(".timer")
var wordBlanksEl = document.querySelector(".word-blanks")
var winsEl = document.querySelector(".win")
var lossesEl = document.querySelector(".lose")

// list of words
var words = ["bacon", "pancakes", "waffels", "eggs", "cheese"]
var userGuesses = [] //list of letters guessed by user
var answer

function startRound() {
  // start timer
  console.log("starting Round")  // pick a random word
  // set word-blanks to have ___'s
}

function onKeydown(event) {
  // check if letter pressed is in the answer string
    // if yes
      // reveal letter
}

function tick() {
  // check if userGuesses has all tletters that are in answer string
    // if has guess all letters, 
      // end round
      // increment wins
      // display you won
    // else 
      // is timer count at 0
        // if yes
          // display round lost
          // increment loses
      // else
        // decrement timer count
}
// event listeners
  // start
startButton.addEventListener("click", startRound)
  // reset
  // keydown onKeydown
