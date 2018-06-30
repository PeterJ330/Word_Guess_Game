



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
// ================   variables   ========================================================================================================================================
var game = {
    level: 1 , 
    wins: 0 ,
    guessLeft: 6 ,
    space: "_" ,
    correctLetter: 0 ,
    wrongLetter: 0,
    characterArr: [] ,
    placeHolder: [] ,
    substitutions: []
    
};

// ================   logic   =============================================================================================================================================

document.onkeyup = function startGame(event) {
    //console.log(event);

// value for "var randWord" is randomly selected from wordsArray
    var randWord = words[Math.floor(Math.random() * words.length)];
        console.log(randWord);
        console.log("Word Length: "+ randWord.length);
                //console.log(event);

// splits randWord string into an array named charArr
    game.characterArr = randWord.split("");
        console.log(game.characterArr);
                
// creates "var placeHolder" to repeat "var space" string an amount equal to "var randWord" string length
    game.placeHolder = game.space.repeat(randWord.length);
        console.log(game.placeHolder);

    game.substitutions = game.placeHolder.split("");
        console.log(game.substitutions);
                
// displays "var placeHolder" in the html
    var html = 
        "<p> Word: " + randWord + "  </p>" ;
        document.querySelector("#game").innerHTML = html;

    var test = 
        "<p> Word: " + game.substitutions + "  </p>" ;
        document.querySelector("#testing").innerHTML = test;

        // var test = 
        // "<p> Word: " + placeHolder + "  </p>" ;
        //     document.querySelector("#testing").innerHTML = test;

        document.querySelector("#level").innerHTML = "Level: " + game.level + " " ;
        document.querySelector("#wins").innerHTML = "Wins: " + game.wins + " ";
        document.querySelector("#guessRemaining").innerHTML = "Guesses Remaining: " + game.guessLeft + " " ;
        document.querySelector("#alreadyGuessed").innerHTML =  " Letters Already Guessed: " + " " + " " ;
                

document.onkeyup = function doSecond(e) {
    console.log(e.key);

// Determines which key was pressed. Make it uppercase
    var userGuess = e.key.toUpperCase();
        console.log("User Guess: "+ userGuess);   

                //if (userGuess == game.characterArr[i]) {
                    // for (j=0; j < game.characterArr.length; j++) {
                    //     game.placeHolder[j] = userGuess;

                    // }
     for (i=0; i < game.characterArr.length; i++){
        if (userGuess === game.characterArr[i]) {
            game.substitutions[i] = userGuess;
            console.log(game.substitutions);
            
            var test = 
                "<p> Word: " + game.substitutions + "  </p>" ;
                document.querySelector("#testing").innerHTML = test;
        }

     }           
        
     if (game.characterArr.includes(userGuess)) {
        game.correctLetter++ ; 
        console.log("Number Correct "+ game.correctLetter);

        // for (i=0; i < game.characterArr.length; i++) {
        //     game.substitutions[i] = userGuess;
        //     console.log(game.substitutions);
        //         }

        document.querySelector("#level").innerHTML = "Level: " + game.level + " " ;
        document.querySelector("#wins").innerHTML = "Wins: " + game.wins + " ";
        document.querySelector("#guessRemaining").innerHTML = "Guesses Remaining: " + game.guessLeft + " " ;
        document.querySelector("#alreadyGuessed").innerHTML =  " Letters Already Guessed: " + " " + " " ;

        } else {
            game.guessLeft-- ;
            game.wrongLetter++ ;
                //console.log("Number Wrong "+ game.wrongLetter);
                //console.log(game.guessLeft);

            document.querySelector("#level").innerHTML = "Level: " + game.level + " " ;
            document.querySelector("#wins").innerHTML = "Wins: " + game.wins + " ";
            document.querySelector("#guessRemaining").innerHTML = "Guesses Remaining: " + game.guessLeft + " " ;
            document.querySelector("#alreadyGuessed").innerHTML =  " Letters Already Guessed: " + " " + " " 
            document.querySelector("#letters").innerHTML += userGuess + "  " + "  " + "  " ;   
            }

    if (game.guessLeft === 0) {
        alert("YOU LOSE!");
        console.log("YOU LOSE!");
        youLose();
    }

    if (game.correctLetter === randWord.length) {
        //console.log("YOU WIN!");
        game.wins++ ;
        alert("YOU WIN!");
        console.log("YOU WIN!");
        game.guessLeft = 6 ;
        game.correctLetter = 0; 
        game.wrongLetter = 0 ;
        console.log("guessLeft: "+ game.guessLeft);
        console.log("correctLetter: "+ game.correctLetter);
        startGame(event);
                    
    }

    if (game.wins === 5 || game.wins === 10 || game.wins === 15 ) {   
        game.level++;
    }

    function youLose(){
        var tryAgain = confirm("Try Again?");

        if (tryAgain) {
            game.guessLeft = 6 ;
            game.correctLetter = 0 ;
            game.wrongLetter = 0 ; 
            game.wins = 0 ;
            game.level = 1 ;
            startGame(event);
        }
        else {
            document.write("Thank You For Playing");
        }

    }

}}


