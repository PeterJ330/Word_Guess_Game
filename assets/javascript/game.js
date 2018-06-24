



// First batch of values to choose from
var words = [
    "Pac Man",
    "Tron",
    "Pong",
    "Centipede", 
    "Galaga"
   ]

// Select from bonusWords array once user has solved all values in words array
var bonusWords = [
    "Space Invaders",
    "Donkey Kong",
    "Asteroids",
    "Dig Dug",
    "Frogger"
   ]

// Select from doubleBonus array once user has solved all values in bonusWords array
var doubleBonus = [
    "Missile Command",
    "Tempest",
    "Lunar Lander",
    "Street Fighter",
    "Paper Boy"
   ]
// ================   variables   =====================================================================

var wins = 0
var guessLeft = placeholder
var guessed = placeholder



// ================   logic   ==========================================================================

document.onkeyup = function(event) {
    console.log(event);
}

   
var computerGuess = words[Math.floor(Math.random() * words.length)];







// ================   html   =============================================================================

var html = 
//"<h4> Level: "  </h4>"
"<p> Wins: " + wins + " </p>" +
"<p> Guesses Remaining: " + guessLeft + " </p>" +
"<p> Letters Already Guessed: " + guessed + " </p>";


