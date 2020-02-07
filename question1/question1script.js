/* global $*/
var counter = 0 ;
$(function() {
  $("#slider").slider();
  $("#slider").slider('option',{min: 0, max: 100});
  
});

$("#answer1").click(function() {
  let answer = $("#slider").slider("value");
  console.log(answer);
  if(answer === 25){
    $(".answerSpace").text("thats correct! Only About 25 percent of jobs in tech are filled by women, while they make up 47 percent of the workforce")
    $('.dropBtn').show();
  } else if(answer < 25) {
    $(".answerSpace").text("Almost, but you're a little too low...")
    counter =+ 1
  } else {
    $(".answerSpace").text("Not quite that high...")
    counter =+ 1 
  }
}); 
 //export counter

