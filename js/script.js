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
  let computerchoice = getRandomInt(3);

  console.log(computerchoice);
  if (computerchoice === 0){
      computerchoice.toString();
      computerchoice = "Rock";
  } else if (computerchoice === 1){
      computerchoice.toString();
      computerchoice = "Scissors";
  }else {
      computerchoice.toString();
      computerchoice = "Paper";
  }
    
});
});