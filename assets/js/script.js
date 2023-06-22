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

function getRandomWord() {
  var randomIdx = Math.floor(Math.random() * words.length)
  answer = words[randomIdx]
}

function renderWord() {
  var blanks = ""
  for (var i = 0; i < answer.length; i++) {
    blanks += "_"
  }
  wordBlanksEl.innerText = blanks.split('').join(' ')
  
}

function startRound() {
  console.log("starting Round")  
  // TODO: start timer
  getRandomWord()
  renderWord()
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
