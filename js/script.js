// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */


// DOCUMENT READY FUNCTION BELOW
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
$( "document" ).ready(function() {
$("#shoot").click(function() {
  let choice = $("#input").val();
  $("#userChoice").text(choice);
  let computerchoice = Math.random();
  console.log(computerchoice);
  let x;
  if (computerchoice > .60) {
        $("#computerChoice").html("Rock");
        x = "rock";
    }else if (computerchoice > .30 && computerchoice <.60){
        $("#computerChoice").html("Scissors");
        x = "scissors";
    }
    else {
        $("#computerChoice").html("Paper");
        x = "paper";
    }
if (choice === "rock"){
    if (x === "rock"){
        $("#result").html("Tied.");
    }else if( x === "paper"){
        $("#result").html("Computer Wins!");
    }else if (x === "scissors"){
        $("#result").html("User Wins!");
    }else {
        $("#result").html("Try again.......");
    }
}

else if (choice === "paper"){
    if (x === "paper"){
        $("#result").html("Tied.");
    }else if( x === "scissors"){
        $("#result").html("Computer Wins!");
    }else if (x === "rock") {
        $("#result").html("User Wins!");
    }else{
        $("#result").html("Try again.......");
    }
}
else if (choice === "scissors"){
    if (x === "scissors"){
        $("#result").html("Tied.");
    }else if( x === "rock"){
        $("#result").html("Computer Wins!");
    }else if (x === "paper"){
        $("#result").html("User Wins!");
    }
}else{
        $("#result").html("Try again.......");
    }

    
});
});