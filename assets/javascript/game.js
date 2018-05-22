// Word bank - Cocktail themed
var words = [
    "old fashioned",
    "negroni",
    "martini",
    "daquiri",
    "margarita",
    "boulevardier"
]

// Word generator
var word = words[Math.floor(Math.random() * words.length)]

// Pseudocode
// IF remaining lives = 0, THEN "Game Over"
// How to track lives?
// How to even make them display?
// Tracking lives left function
var lives = console.log("5")
var showLives = console.log("myLives")
// Not sure why this won't work
// .innerHTML = "3"
// Not even console log is working
comments = function () {
    console.log("You have " + lives + " lives")
    if (lives < 1) {
      console.log("Game Over")
    }
}

// Answer array
var answerArray = []
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_"
}

var remainingLetters = word.length

// Loop that runs the game
// This is also where we can make it so you lose if you run out of guesses
while (remainingLetters > 0) {
    alert(answerArray.join(" "))

var guess = prompt("Guess a letter to start, or hit Cancel if you're not up to it.")
if (guess === null) {
    break
} else if (guess.length !== 1) {
    alert("Single letter, please. You know the rules.")
} else {
    for (var j = 0; j < word.length; j++){
        if (word[j] === guess) {
            answerArray[j] = guess
            remainingLetters--
        }
    }
}
}

// Success; turns these into innerHTML
(answerArray.join(" "))
alert("Nice! The word was " + word)