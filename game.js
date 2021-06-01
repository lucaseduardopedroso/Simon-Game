var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence(){
    //Generate a number between 0 - 3 and store it.
    var randomNumber = Math.floor(Math.random() * 4);
    //Choose a random color from buttonColours using the random number
    var randomChosenColour = buttonColours[randomNumber];
    //Store the random color in the gamePattern
    gamePattern.push(randomChosenColour);

    //Select the random color button and animate it
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    //Play the sound of the correspondent button
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}