



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

var level = 1 ;
var wins = 0 ;
var i = 0 ;
var guessLeft = 6 ;
var space = " _ ";
var correctLetter = 0;
var wrongLetter = 0;

//var guessed = "placeholder" ;

//function wordLength() {
    //words.findIndex() }

// ================   logic   ==========================================================================

// ****** add some kind of loop here so that when the user has selected all
//        letters in the string a new word will be selected????     *********

//function startFunction() {
document.onkeyup = function doFirst(event) {
        var randWord = event.key;
                    console.log(event);

        // value for "var randWord" is randomly selected from wordsArray
        var randWord = words[Math.floor(Math.random() * words.length)];
            console.log(randWord);
                    console.log(event);
        
        // splits randWord string into an array named charArr
        var charArr = randWord.split("");
                    console.log(charArr);
        
        // creates "var oldStr" to repeat "var space" string an amount equal to "var randWord" string length
        var oldStr = space.repeat(randWord.length);
                    console.log(event);
        
        // displays "var oldStr" in the html
        var html = 
            "<p> Word: " + oldStr + "  </p>" ;
                document.querySelector("#game").innerHTML = html;

        // var html = 
        // "<p> Word: " + charArr + "  </p>" ;
        //     document.querySelector("#game").innerHTML = html;

       
                document.querySelector("#level").innerHTML = "Level: " + level + " " ;
                document.querySelector("#wins").innerHTML = "Wins: " + wins + " ";
                document.querySelector("#guessRemaining").innerHTML = "Guesses Remaining: " + guessLeft + " " ;
                document.querySelector("#alreadyGuessed").innerHTML =  " Letters Already Guessed: " + " " + " " 
                

  // ***************************************************************************************************************************************************************************************************
       
        // different methods for generating the number of guesses (var guessLeft) based on the word length.....

                    // var randWord = words[Math.floor(Math.random() * words.length)];

                    // Calculates initial # of guesses by adding the string length of the value the randWord variable returns
                        // to 50% of that string length and rounding up to nearest integer
                    //var guessLeft = Math.ceil(randWord.length + (randWord.length * 0.5));

                    // Sets the # of guesses to the length of the word
                    //var guessLeft = randWord.length ;

                    // Sets the number of guesses to 1/2 the word length and rounds up to nearest integer
                    //var guessLeft = Math.ceil((randWord.length * 0.5) + 1);

// ***************************************************************************************************************************************************************************************************



        document.onkeyup = function doSecond(event) {
            //console.log(event.key);
            //console.log(randWord);

            // Determines which key was pressed. Make it uppercase
                var userGuess = event.key.toUpperCase();
                    console.log(userGuess);    
    
        if (randWord.includes(userGuess)) {
                    correctLetter++ ; 
                        console.log("Right" + " " + correctLetter);
                        console.log(correctLetter);
                    


            // *************************************************************************************************************************************************************************************************** 
            
                    //tyring to figure out how to replcae blanks with correct user selections  
                                // function strReplace () {
                                //     return newStr
                                //     var oldStr = space.repeat(blanks);
                                //     var newStr = oldStr.replace( space , userGuess)
                                // }
                                // strReplace( oldStr , newStr);

            // ***************************************************************************************************************************************************************************************************
                        
            
                    document.querySelector("#level").innerHTML = "Level: " + level + " " ;
                    document.querySelector("#wins").innerHTML = "Wins: " + wins + " ";
                    document.querySelector("#guessRemaining").innerHTML = "Guesses Remaining: " + guessLeft + " " ;
                    document.querySelector("#alreadyGuessed").innerHTML =  " Letters Already Guessed: " + " " + " " ;


            }

           else {
                guessLeft-- ;
                wrongLetter++ ;
                    console.log("Wrong" +" "+ wrongLetter);
                    console.log(guessLeft);
                

                    document.querySelector("#level").innerHTML = "Level: " + level + " " ;
                    document.querySelector("#wins").innerHTML = "Wins: " + wins + " ";
                    document.querySelector("#guessRemaining").innerHTML = "Guesses Remaining: " + guessLeft + " " ;
                    document.querySelector("#alreadyGuessed").innerHTML =  " Letters Already Guessed: " + " " + " " 
                    document.querySelector("#letters").innerHTML += userGuess + "  " + "  " + "  " ;
                    
            }

            if (correctLetter === randWord.length) {
                //console.log("YOU WIN!");
                alert("YOU WIN!");
                console.log(randWord.length);   
                wins++ ;         
            }

         

        
        else if (guessLeft == 0) {
                alert("YOU LOSE!")

            }

            if (wins == 5 || wins == 10 || wins == 15 ) {
                    
                level++;
        }


        

      



    

    }
    };


