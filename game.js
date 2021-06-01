var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence(){
    //Generates a number between 0 - 3 and stores it.
    var randomNumber = Math.floor(Math.random() * 4);
    //Choose a random color from buttonColours using the random number
    var randomChosenColour = buttonColours[randomNumber];
    //Stores the random color in the gamePattern
    gamePattern.push(randomChosenColour);
}