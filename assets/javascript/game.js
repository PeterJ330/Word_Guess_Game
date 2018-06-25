



// First batch of values to choose from
var words = [
    "FROGGER",
    "TRON",
    "PONG",
    "CENTIPEDE", 
    "GALAGA"
   ]

// Select from bonusWords array once user has solved all values in words array
var bonusWords = [
    "SPACE INVADERS",
    "DONKEY KONG",
    "ASTEROIDS",
    "DIG DUG",
    "PAC MAN"
   ]

// Select from doubleBonus array once user has solved all values in bonusWords array
var doubleBonus = [
    "MISSILE COMMAND",
    "TEMPEST",
    "LUNAR LANDER",
    "STREET FIGHTER",
    "PAPER BOY"
   ]
// ================   variables   =====================================================================

var level = "*placeholder*" ;
var wins = 0 ;
var i = 0 ;
var guessLeft = 6 ;
//var guessed = "placeholder" ;



//function wordLength() {
    //words.findIndex() }

// ================   logic   ==========================================================================


    
// ****** add some kind of loop here so that when the user has selected all
//        letters in the string a new word will be selected????     *********


// Randomly chooses a value from the words array. This is the word the user is trying to guess. 


document.onkeyup = function(event) {
    
    var randWord = event.key;
        console.log(event);

    var randWord = words[Math.floor(Math.random() * words.length)];
        console.log(randWord);
    
    var htmlone = 
        "<p> Word: " + randWord + "  </p>" ;
            document.querySelector("#game").innerHTML = htmlone;

    var html = 
        "<p> Level: " + level + "  </p>" +
        "<p> Wins: " + wins + " </p>" +
        "<p> Guesses Remaining: " + guessLeft + " </p>" +
        "<p> Letters Already Guessed: " + " " + " </p>";
            document.querySelector("#showtext").innerHTML = html;
    

// var randWord = words[Math.floor(Math.random() * words.length)];
// console.log(randWord);

                    // Calculates initial # of guesses by adding the string length of the value the randWord variable returns
                    // to 50% of that string length and rounding up to nearest integer
                    //var guessLeft = Math.ceil(randWord.length + (randWord.length * 0.5));

                    // Sets the # of guesses to the length of the word
                    //var guessLeft = randWord.length ;

                    // Sets the number of guesses to 1/2 the word length and rounds up to nearest integer
                    //var guessLeft = Math.ceil((randWord.length * 0.5) + 1);

document.onkeyup = function(event) {
    console.log(event);
    console.log(randWord);

// Determines which key was pressed.
    var userGuess = event.key.toUpperCase();
    //userGuess.value = userGuess.value.toUpperCase();

if (randWord.includes(userGuess)) {
    console.log(userGuess);
    // var html = 
    //     "<p> Level: " + level + "  </p>" +
    //     "<p> Wins: " + wins + " </p>" +
    //     "<p> Guesses Remaining: " + guessLeft + " </p>" +
    //     "<p> Letters Already Guessed: " + " " + " </p>";
    //     document.querySelector("#showtext").innerHTML = html;

}
else {
    guessLeft -- ;
        // var html1 = 
        // "<p> Level: " + level + "  </p>" +
        // "<p> Wins: " + wins + " </p>" +
        // "<p> Guesses Remaining: " + guessLeft + " </p>" +
        // "<p> Letters Already Guessed: " + userGuess + " </p>";
        // document.querySelector("#showtext").innerHTML = html1; 

 
};



// ================   html   =============================================================================

// var html = 
// "<p> Level: " + level + "  </p>" +
// "<p> Wins: " + wins + " </p>" +
// "<p> Guesses Remaining: " + guessLeft + " </p>" +
// "<p> Letters Already Guessed: " + userGuess + " </p>";

// document.querySelector("#game").innerHTML = html;

    // document.querySelector("#guessed").innerHTML = html;

}
};


