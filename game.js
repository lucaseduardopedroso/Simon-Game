var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = 0;
var level = 0;

//Check if a key has been pressed to start
$("body").keypress(function(){
    if(!started){
        //Change the h1 to the level
        $("#level-title").text("Level " + level);
        nextSequence();
        started = 1;
    }
});

//Check the button click and store its color (id)
$(".btn").click(function(){
    var userChosenColour = $(this).attr('id');
    //Store the color clicked in userClickedPattern
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
});

function nextSequence(){
    //Increase a level every time nextSequence is called and chage the level title
    level++;
    $("#level-title").text("Level " + level);
    //Generate a number between 0 - 3 and store it
    var randomNumber = Math.floor(Math.random() * 4);
    //Choose a random color from buttonColours using the random number
    var randomChosenColour = buttonColours[randomNumber];
    //Store the random color in the gamePattern
    gamePattern.push(randomChosenColour);
    //Increase a level each 
    //Select the random color button and animate it
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

//Play the sound of the correspondent button
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

//Add animation to the user click
function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}