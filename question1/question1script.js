/* global $*/
window.counter = 0 ;
$(function() {
  $("#slider").slider();
  $("#slider").slider('option',{min: 0, max: 100});
  
});

$("#answer1").click(function() {
  let answer = $("#slider").slider("value");
  console.log(answer);
  $(".percentNum").text(answer);
  if(answer === 25){
    $(".answerSpace").text("thats correct!");
    $('.dropBtn').show();
    $(".moveOn").show();
  } else if(answer < 25) {
    $(".answerSpace").text("Almost, but you're a little too low...")
    window.counter =+ 1
  } else {
    $(".answerSpace").text("Not quite that high...")
    window.counter =+ 1 
  }
});

$("#answer2").click(function() {
  let answer = $("#slider").slider("value");
  console.log(answer);
  if(answer === 3){
    $(".answerSpace").text("thats correct!");
    $('.dropBtn').show();
    $(".moveOn").show();
  } else if(answer < 3) {
    $(".answerSpace").text("Almost, but you're a little too low...")
    window.counter =+ 1
  } else {
    $(".answerSpace").text("Not quite that high...")
    window.counter =+ 1 
  }
});

$("#answer3").click(function() {
  let answer = $("#slider").slider("value");
  console.log(answer);
  if(answer === 18){
    $(".answerSpace").text("thats correct!");
    $('.dropBtn').show();
    $(".moveOn").show();
  } else if(answer < 18) {
    $(".answerSpace").text("Almost, but you're a little too low...")
    window.counter =+ 1
  } else {
    $(".answerSpace").text("Not quite that high...")
    window.counter =+ 1 
  }
});

$("#answer4").click(function() {
  let answer = $("#slider").slider("value");
  console.log(answer);
  if(answer === 41){
    $(".answerSpace").text("thats correct!");
    $('.dropBtn').show();
    $(".moveOn").show();
  } else if(answer < 41) {
    $(".answerSpace").text("Almost, but you're a little too low...")
    window.counter =+ 1
  } else {
    $(".answerSpace").text("Not quite that high...")
    window.counter =+ 1 
  }
});

$("#answer5").click(function() {
  let answer = $("#slider").slider("value");
  console.log(answer);
  if(answer === 93){
    $(".answerSpace").text("thats correct!");
    $('.dropBtn').show();
    $(".moveOn").show();
  } else if(answer < 93) {
    $(".answerSpace").text("Almost, but you're a little too low...")
    window.counter =+ 1
  } else {
    $(".answerSpace").text("Not quite that high...")
    window.counter =+ 1 
  }
});

$("#answer6").click(function() {
  let answer = $("#slider").slider("value");
  console.log(answer);
  if(answer === 6){
    $(".answerSpace").text("thats correct!");
    $('.dropBtn').show();
    $(".moveOn").show();
  } else if(answer < 6) {
    $(".answerSpace").text("Almost, but you're a little too low...")
    window.counter =+ 1
  } else {
    $(".answerSpace").text("Not quite that high...")
    window.counter =+ 1 
  }
});

$("#answer7").click(function() {
  let answer = $("#slider").slider("value");
  console.log(answer);
  if(answer === 77){
    $(".answerSpace").text("thats correct!");
    // info: san francisco's average rent (monthly) is $4500; national average is $1625 per month.
    $('.dropBtn').show();
    $(".moveOn").show();
  } else if(answer < 77) {
    $(".answerSpace").text("Almost, but you're a little too low...")
    window.counter =+ 1
  } else {
    $(".answerSpace").text("Not quite that high...")
    window.counter =+ 1 
  }
});

$("#answer8").click(function() {
  let answer = $("#slider").slider("value");
  console.log(answer);
  if(answer === 50){
    $(".answerSpace").text("thats correct!");
    // info: san francisco's average rent (monthly) is $4500; national average is $1625 per month.
    $('.dropBtn').show();
    $(".moveOn").show();
  } else if(answer < 50) {
    $(".answerSpace").text("Almost, but you're a little too low...")
    window.counter =+ 1
  } else {
    $(".answerSpace").text("Not quite that high...")
    window.counter =+ 1 
  }
});

$('.dropBtn').click(function() {
  $('.dropInfo').show();
});

console.log(window.counter);
