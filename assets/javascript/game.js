
// First batch of values to choose from
var words = [
    "FROGGER",
    "TRON",
    "PONG",
    "CENTIPEDE",
    "ASTEROIDS",
    "TEMPEST",
    "GALAGA"
]
// ================   variables   ========================================================================================================================================
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

    // value for "var randWord" is randomly selected from wordsArray
    var randWord = words[Math.floor(Math.random() * words.length)];
    console.log(randWord);
    console.log("Word Length: " + randWord.length);

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
    document.querySelector("#wins").innerHTML = "Wins: " + game.wins + " ";
    document.querySelector("#guessRemaining").innerHTML = "Guesses Remaining: " + game.guessLeft + " ";
    document.querySelector("#alreadyGuessed").innerHTML = " Letters Already Guessed: " + " " + " ";
    document.querySelector("#letters").innerHTML = game.alreadyGuessed + "  " + "  " + "  ";

    //******** begins guessing portion of game *****************
    document.onkeyup = function doSecond(e) {

        if (e.which <= 90 && e.which >= 65){

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
            document.querySelector("#wins").innerHTML = "Wins: " + game.wins + " ";
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
            document.querySelector("#wins").innerHTML = "Wins: " + game.wins + " ";
            document.querySelector("#guessRemaining").innerHTML = "Guesses Remaining: " + game.guessLeft + " ";
            document.querySelector("#alreadyGuessed").innerHTML = " Letters Already Guessed: " + " " + " "
            document.querySelector("#letters").innerHTML = game.alreadyGuessed + "  " + "  " + "  ";
        }

        if (game.guessLeft === 0) {
            alert("YOU LOSE!");
            youLose();
        }

        if (game.substitutions.join("") == randWord) {
            game.wins++;
            game.guessLeft = 6;
            game.correctLetter = 0;
            game.alreadyGuessed = [];
            alert("YOU WIN!");
            startGame(event);

        }

        function youLose() {
            var tryAgain = confirm("Try Again?");

            if (tryAgain) {
                game.guessLeft = 6;
                game.correctLetter = 0;
                game.wins = 0;
                game.alreadyGuessed = [];
                startGame(event);
            }
            else {
                document.write("Thank You For Playing");
            }

        }
    } else {}

    }
}


