
// THIS displayed, don't change
window.onload = function() {
    var lives = 2;
    document.getElementById("myLives").innerHTML = lives

    // function myFunction() {
        // document.getElementById("guesses").innerHTML = guess
    // }
    // The logic that calls the function to start needs to be up here
   
$(button).on("click", function() {
    document.write(this.alphabet)
})

// Word bank - Cocktail themed
var words = [
    "old fashioned",
    "negroni",
    "martini",
    "daquiri",
    "margarita",
    "boulevardier"
]

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

// Word generator
var word = words[Math.floor(Math.random() * words.length)]

// Pseudocode
// IF remaining lives = 0, THEN "Game Over"
// How to track lives?
// How to even make them display?
// Tracking lives left function
// var misses = 10;

var showLives = "myLives";

comments = function () {
    console.log("You have " + lives + " lives")
    if (lives < 1) {
    document.getElementById("game_over").innerHTML = ("Game Over")
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
// need a flag to say whether or not the letter guessed doesn't match any letter in the word. need to set it after we've gone throught eh whole word

     
var guess = prompt("Guess a letter to start, or hit Cancel if you're not up to it.")
var flag = false; 
if (guess === null) {
    break
} else if (guess.length !== 1) {
    alert("Single letter, please. You know the rules.")
} else {
    for (var j = 0; j < word.length; j++){
        if (word[j] === guess) {
            answerArray[j] = guess
            remainingLetters--
            flag = true
        }
    }
    if (flag == false) {
        lives--
        comments()
    }
}
}

// Success; turns these into innerHTML
(answerArray.join(" "))
// alert("Nice! The word was " + word)
document.getElementById("success").innerHTML = ("The word was " + word)
}