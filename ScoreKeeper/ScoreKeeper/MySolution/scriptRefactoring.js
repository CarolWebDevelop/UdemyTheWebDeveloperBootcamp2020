//Author:   Carol Kelly
//Date Started:  12/23/2020
//Last Data Updated:  12/23/20
//What does this do?
//      VERSION 2 - Refactoring
//          This version removes repetive coding.
//          There are still more changes that can be made to make
//          this file even more efficient.            
//      This is the Javascript to make the ping pong score keeper work.

//Notes of problems I had while developing this file:
//  1)  Durring the button definition, I typed in "#p1Buton" and 
//      then when I tried to define the click it wouldn't work.
//      I was getting frustrated when finally I realized my error.
//  2)  I am having issues connecting the score display when I alert
//      out the value of p1Score on click it displays the correct number
//      but it is not updating the p1ScoreDisplay.
//      SOLUTION:   I had not inclded the # at the beginning of the id
//                  names when I defined them.
//  3)  Now I'm having an issue with the score needed to win.  When I
//      change the score it is not displaying the temporary alert I have
//      set up.  I forgot to remove the hard assignment that we had
//      set up during development.  It still does not appear to be
//      working correctly.
//      SOLUTION:   I retyped the code and moved it from above the 
//                  Is there a winner? section to between the p2 and 
//                  reset buttons.  Now it works?????
//  4)  The code to change the color of the font when someone wins is 
//      working fine if player 1 wins, but it is not working if player 2
//      wins.  All I did was copy and paste the code and then switch the
//      class name, I don't understand.  I added an alert to ensure it was
//      getting where it needed to be and the first time I ran it the colors
//      changed after I clicked ok in the alert box, but everytime after 
//      that they stayed black?  Ok after testing it happens if either
//      player wins.  The first time through it changes color after that 
//      it stays black.  I'm going to watch the class video and see if I 
//      shouldn't have put the color to black in the newGame function.
//      SOLUTION:   I had made an additional class during the game and had
//                  it set the color to black.  The instructor suggested 
//                  using the remove option and now everything works correctly.

//Test to ensure connectivity
//alert("Connected");

//To remove repetive coding this area creates objects p1 and p2
const p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1ScoreDisplay")
}
const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2ScoreDisplay")
}

//Assigns each of the id's to a variable 
//so that when they are needed you do not need to 
//type out the entire document command.
const resetButton = document.querySelector("#resetButton");
const scoreToWinFromHTML = document.querySelector("#scoreNeededToWin");

//Hard code points needed to win.
let scoreToWin = 3;

//Is there a winner?
let isThereAWinner = false;

//If you change opponent to opponents and have that variable be an array
//it would allow for an unlimited number of players.
function updateScores(player, opponent){
    if(!isThereAWinner){
        player.score += 1;
        if(player.score === scoreToWin){
            isThereAWinner = true;
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

//The player 1 button
p1.button.addEventListener("click", function () {
    updateScores(p1, p2)
})

//The player 2 button
p2.button.addEventListener("click", function () {
    updateScores(p2, p1)
})

//What are the points needed to win?
scoreToWinFromHTML.addEventListener("change", function (){
    scoreToWin = parseInt(this.value);
    newGame();
 })

//The reset button
resetButton.addEventListener("click", newGame)

function newGame(){
    isThereAWinner = false;
    
    //To remove repetive coding we are using a for loop to go through the players.
    for(let p of [p1, p2]){
        p.score = 0;
        p.display.textContent = p.score;
        p.display.classList.remove("has-text-success", "has-text-danger");
        p.button.disabled=false;
    }
}