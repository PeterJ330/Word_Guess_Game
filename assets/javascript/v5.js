



// Word Bank to choose from
var words = [
    "FROGGER",
    "TRON",
    "PONG",
    "CENTIPEDE", 
    "GALAGA"
   ]

// ================   variables   =====================================================================


var game = {
    level: 1 , 
    wins: 0 ,
    i: 0 ,
    guessLeft: 6 ,
    space: "_" ,
    correctLetter: 0 ,
    wrongLetter: 0,
    
};

// ================   logic   ==========================================================================

document.onkeyup = function doFirst(event) {
        var randWord = event.key;
                    console.log(event);

        // value for "var randWord" is randomly selected from wordsArray
        var randWord = words[Math.floor(Math.random() * words.length)];
            console.log(randWord);
            console.log(randWord.length);
                    //console.log(event);

        // splits randWord string into an array named charArr
        var charArr = randWord.split("");
                    console.log(charArr);
        
        // creates "var placeHolder" to repeat "var space" string an amount equal to "var randWord" string length
            var placeHolder = game.space.repeat(randWord.length);
                    console.log(placeHolder);
                    
                //  var placeHolderArr = placeHolder.trim().split("");
                //         console.log(placeHolderArr);

                        // var tester = placeHolder.split("");
                        //     console.log(tester);

        // displays "var placeHolder" in the html
        var html = 
            "<p> Word: " + randWord + "  </p>" ;
                document.querySelector("#game").innerHTML = html;

        var test = 
        "<p> Word: " + placeHolder + "  </p>" ;
            document.querySelector("#testing").innerHTML = test;

            // var test = 
            // "<p> Word: " + placeHolder + "  </p>" ;
            //     document.querySelector("#testing").innerHTML = test;

       
                document.querySelector("#level").innerHTML = "Level: " + game.level + " " ;
                document.querySelector("#wins").innerHTML = "Wins: " + game.wins + " ";
                document.querySelector("#guessRemaining").innerHTML = "Guesses Remaining: " + game.guessLeft + " " ;
                document.querySelector("#alreadyGuessed").innerHTML =  " Letters Already Guessed: " + " " + " " 
                


        document.onkeyup = function doSecond(event) {
            console.log(event.key);
            //console.log(randWord);

            // Determines which key was pressed. Make it uppercase
            var userGuess = event.key.toUpperCase();
                console.log("User Guess: "+ userGuess);   


                var tester = placeHolder.split("");
                console.log(tester);

                        var test = 
                        "<p> Word: " + tester + "  </p>" ;
                            document.querySelector("#testing").innerHTML = test;


                            for (i=0; i < randWord.length ; i++) {
                                if (userGuess == randWord[i]) {
                                        const newString = tester.replace(tester[i], userGuess);
                                            console.log(newString);
                                }
                            }

                if (randWord.includes(userGuess)) {
                            game.correctLetter++ ; 
                                console.log("Number Correct "+ game.correctLetter);
                                //console.log(game.correctLetter);
            
                                        document.querySelector("#level").innerHTML = "Level: " + game.level + " " ;
                                        document.querySelector("#wins").innerHTML = "Wins: " + game.wins + " ";
                                        document.querySelector("#guessRemaining").innerHTML = "Guesses Remaining: " + game.guessLeft + " " ;
                                        document.querySelector("#alreadyGuessed").innerHTML =  " Letters Already Guessed: " + " " + " " ;
                    } 
                    else {
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
                //defaultValue(one); 
                //document.querySelector("#alreadyGuessed").innerHTML =  " Letters Already Guessed: " + " " + " " ; 
                game.guessLeft = 6 ;
                game.correctLetter = 0; 
                game.wrongLetter = 0 ;
                    console.log("guessLeft: "+ game.guessLeft);
                    console.log("correctLetter: "+ game.correctLetter);
                    doFirst(event);
                         
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
                    game.level = 0 ;
                    doFirst(event);
                    //userGuess.defaultValue;
                } 
                    else {
                        document.write("Thank You For Playing");
                    }

        }

    }}



