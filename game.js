var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

//Check the button click and store its color (id)
$(".btn").click(function(){
    var userChosenColour = $(this).attr('id');
    //Store the color clicked in userClickedPattern
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
});

function nextSequence(){
    //Generate a number between 0 - 3 and store it
    var randomNumber = Math.floor(Math.random() * 4);
    //Choose a random color from buttonColours using the random number
    var randomChosenColour = buttonColours[randomNumber];
    //Store the random color in the gamePattern
    gamePattern.push(randomChosenColour);

    //Select the random color button and animate it
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
}

//Play the sound of the correspondent button
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}