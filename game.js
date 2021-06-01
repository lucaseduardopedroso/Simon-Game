var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = 0;
var level = 0;

//Check if a key has been pressed to start
$(document).keypress(function(){
    if(!started){
        //Change the h1 to the level
        $("#level-title").text("Level " + level);
        nextSequence();
        started = 1;
    }
});

//Check the button click and store its color (id)
$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    //Store the color clicked in userClickedPattern
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){
    //Check if the most recent user answer is the same as the game pattern
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("success");
        //Check if the user finished their sequence 
        if(userClickedPattern.length === gamePattern.length){
            //Call the nextSequence after a 1000 millisecond delay
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    }
    else{
        console.log("wrong");
        gameOver("wrong");
        startOver();

    }
}

function nextSequence(){
    //Reset the userClickedPattern to an empty array ready for the next level
    userClickedPattern = [];
    //Increase a level every time nextSequence is called and chage the level title
    level++;
    $("#level-title").text("Level " + level);
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

//Add animation to the user click
function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function gameOver(over){
    //Play "wrong track"
    playSound(over);
    //Add animation to the background
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    }, 200);
    //Change the title to Game Over
    $("#level-title").text("Game Over, Press Any Key to Restart");
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = 0;
}