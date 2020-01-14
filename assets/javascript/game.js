
// Word bank for Level 1
var words = [
    "ONE",
    "TWO",
    // "GALAGA",
    // "PAC-MAN",
    // "DONKE YKONG",
    //  "CENTIPEDE",
    //  "SPACE INVADERS",

];

// Word bank for Level 2
var wordsTwo = [
    "THREE",
    "FOUR"
    //  "DEFENDER",
    //  "ASTEROIDS"
    //  "STREET FIGHER",
    //  "MISSILE COMMAND"
    //  "DOUBLE DRAGON",
];

// Word bank for Level 3
var wordsThree = [
    "FIVE",
    "SIX"
    //  "PUNCH-OUT",
    //  "FROGGER"
    //  "PAPERBOY",
    //  "SPY HUNTER"
    //  "JOUST",
];

var usedWords = [];
var usedWordsTwo = [];
var usedWordsThree = [];
var level;

var game = {
    wins: 0,
    guessLeft: 6,
    space: "_",
    correctLetter: 0,
    characterArr: [],
    placeHolder: [],
    substitutions: [],
    alreadyGuessed: []

};


// ================   logic   =============================================================================================================================================

//*** Initial Set Up ***
document.onkeyup = function startGame(event) {

    if (words.length > 0) {
        level = 1;
        // value for "var randWord" is randomly selected from wordsArray
        var randWord = words[Math.floor(Math.random() * words.length)];
        // removes the word from the array of available words
        words.splice(words.indexOf(randWord), 1);
        // adds the word to an array of used words
        usedWords.push(randWord);
    }
    else if (words.length <= 0 && wordsTwo.length > 0) {
        level = 2;
        var randWord = wordsTwo[Math.floor(Math.random() * wordsTwo.length)];
        wordsTwo.splice(wordsTwo.indexOf(randWord), 1);
        usedWordsTwo.push(randWord);
    }
    else if (wordsTwo.length <= 0 && wordsThree.length > 0) {
        level = 3;
        var randWord = wordsThree[Math.floor(Math.random() * wordsThree.length)];
        wordsThree.splice(wordsThree.indexOf(randWord), 1);
        usedWordsThree.push(randWord);
    }
    else {
        alert("Congratulations! You have completed Hangman: Arcade Classics Edition!!");
        //alert("Press 'OK' to Play Again!");
        var playAgain = confirm("Would you like to Play Again?");
        if (playAgain) {
            window.location.reload();
        } else {
            // do nothing
        }

    };
    console.log(randWord);

    // splits randWord string into an array named charArr
    game.characterArr = randWord.split("");

    // creates "var placeHolder" to repeat "var space" string an amount equal to "var randWord" string length
    game.placeHolder = game.space.repeat(randWord.length);

    // creates an array of blanks "_" to display in place of the word being guessed
    game.substitutions = game.placeHolder.split("");

    // displays "var game.substitutions" in the html
    var displayWord =
        "<p> Word: " + game.substitutions.join('') + "  </p>";
    document.querySelector("#game").innerHTML = displayWord;
    document.querySelector("#level").innerHTML = "Level: " + level + " ";
    document.querySelector("#wins").innerHTML = "Words Guessed Correctly: " + game.wins + " ";
    document.querySelector("#guessRemaining").innerHTML = "Guesses Remaining: " + game.guessLeft + " ";
    document.querySelector("#alreadyGuessed").innerHTML = " Letters Already Guessed: " + " " + " ";
    document.querySelector("#letters").innerHTML = game.alreadyGuessed + "  " + "  " + "  ";

    //******** begins guessing portion of game *****************
    document.onkeyup = function doSecond(e) {

        if (e.which <= 90 && e.which >= 65) {

            // creates userGuess and assigns value of e.key from onkeyUp
            var userGuess = e.key.toUpperCase();

            for (i = 0; i < game.characterArr.length; i++) {
                if (userGuess === game.characterArr[i]) {
                    game.substitutions[i] = userGuess;
                    var displayWord =
                        "<p> Word: " + game.substitutions.join('') + "  </p>";
                    document.querySelector("#game").innerHTML = displayWord;
                }
            }

            if (game.characterArr.includes(userGuess)) {
                game.correctLetter++;
                document.querySelector("#wins").innerHTML = "Words Guessed Correctly: " + game.wins + " ";
                document.querySelector("#guessRemaining").innerHTML = "Guesses Remaining: " + game.guessLeft + " ";
                document.querySelector("#alreadyGuessed").innerHTML = " Letters Already Guessed: " + " " + " ";
                document.querySelector("#letters").innerHTML = game.alreadyGuessed + "  " + "  " + "  ";

            } else {

                for (j = 0; j <= game.alreadyGuessed.length; j++) {
                    if (game.alreadyGuessed.includes(userGuess)) {
                    } else {
                        game.alreadyGuessed.push(userGuess);
                        game.guessLeft--;
                        var guessedLetters =
                            "<p> " + game.alreadyGuessed + "  </p>";
                        document.querySelector("#letters").innerHTML = guessedLetters;
                    }
                }
                document.querySelector("#wins").innerHTML = "Words Guessed Correctly: " + game.wins + " ";
                document.querySelector("#guessRemaining").innerHTML = "Guesses Remaining: " + game.guessLeft + " ";
                document.querySelector("#alreadyGuessed").innerHTML = " Letters Already Guessed: " + " " + " "
                document.querySelector("#letters").innerHTML = game.alreadyGuessed + "  " + "  " + "  ";
            }

            if (game.guessLeft === 0) {
                alert("You Have Run Out Of Guesses...");
                youLose();
            }

            setTimeout(function () {
                if (game.substitutions.join("") == randWord) {
                    game.wins++;
                    game.guessLeft = 6;
                    game.correctLetter = 0;
                    game.alreadyGuessed = [];
                    alert("Good Job!");
                    startGame(event);
                }
            }, 250);


            function youLose() {
                var tryAgain = confirm("Would You Like To Try Again?");

                if (tryAgain) {
                    words = [
                        "ONE",
                        "TWO",
                        // "FROGGER",
                        // "TRON",
                        // "PONG",
                        //  "CENTIPEDE",
                        //  "ASTEROIDS",
                        //  "TEMPEST",
                        //  "GALAGA"
                    ];
                    wordsTwo = [
                        "THREE",
                        "FOUR"
                    ];

                    wordsThree = [
                        "FIVE",
                        "SIX"
                    ];
                    game.level = 1,
                    game.guessLeft = 6;
                    game.correctLetter = 0;
                    game.wins = 0;
                    game.alreadyGuessed = [];
                    startGame(event);
                }
                else {
                    window.location.reload();
                }

            }
        } else { }

    }
};


