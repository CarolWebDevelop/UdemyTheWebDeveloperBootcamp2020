//Author:   Carol Kelly
//Date Started:  12/23/2020
//Last Data Updated:  12/23/20
//This is the Javascript to make the ping pong score keeper work.

//Notes of problems I had while developing this file:
//  1)  Durring the button definition, I typed in "#p1Buton" and 
//      then when I tried to define the click it wouldn't work.
//      I was getting frustrated when finally I realized my error.
//  2)  I am having issues connecting the score display when I alert
//      the value of p1Score on click it displays the correct number
//      but it is not updating the p1ScoreDisplay.

//Test to ensure connectivity
//alert("Connected");

//Assigns each of the id's to a variable 
//so that when they are needed you do not need to 
//type out the entire document command.
const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const p1ScoreDisplay = document.querySelector("p1ScoreDisplay");
const p2ScoreDisplay = document.querySelector("p2ScoreDisplay");
//Creates a location for each players scores to be housed.
let p1Score = 0;
let p2Score = 0;

//What happens when the buttons are clicked.
p1Button.addEventListener("click", function () {
    p1Score += 1;
    p1ScoreDisplay.value = p1Score;
})
p2Button.addEventListener("click", function () {
    alert("Playe 2 button clicked!")
})
reset.addEventListener("click", function () {
    alert("Reset button clicked!")
})