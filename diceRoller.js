/*Created on 10/6/2019 by Thomas Sluciak
v1.5.0 - rollDice and playLucky7s are working correctly.
			Current issues:
				Page does not display Play Again button or results
				Page is out of alignment and looks funky, specifically:
					There is no space between label and input field.
					Buttons are not appearing in alignment
					Page goes off screen on XS
					
v1.0.0 - Initial creation. Planned functions and mapped out overall structure of file

    As long as there is money, play the game.
    Each round, the program rolls a virtual pair of dice for the user.
        If the sum of the 2 dice is equal to 7, the player wins $4
        Otherwise, the player loses $1.


The program asks the user how many dollars they have to bet.

    If the starting bet is less than or equal to 0, display an error message.

When the user clicks the Play button, the program then rolls the dice repeatedly until all the money is gone.
    Hint: Use a loop construct to keep playing until the money is gone.
    Hint: We created a rollDice() function in the Rolling Dice exercise.

The program keeps track of how many rolls were taken before the money ran out.
The program keeps track of the maximum amount of money held by the player.
The program keeps track of how many rolls were taken at the point when the user held the most money.
    Hint: For steps 4, 5, and 6, declare some variables.
*/


//Global variables used in all functions
var rollCount = 0;

//Rolls dice for the game
//Checks if result is 7 or not and returns to playLucky7s
function rollDice(){
	console.log("rollDice called");
	rollCount++;
	var dice1 = Math.floor(Math.random() *6) +1;
	var dice2 = Math.floor(Math.random() *6) +1;
	var diceAmt = dice1 + dice2;
	console.log("Rolled for dice 1: " + dice1 
	+ ". Rolled for dice2: " + dice2 +
	 ". Total of both dice: " + diceAmt);
	if ((dice1 + dice2) == 7){
		return true;
	}
	else{
		return false;
	}
}

/*Does the heavy lifting logic-wise
Calls to rollDice()
Checks amount of money
adds and subtracts from startingBet according to dice results
tracks dice rolls and amount won throughout game (move to separate functions?)*/
function playLucky7s(){
	console.log("playLucky7s called");
	var startingBet = document.forms["lucky7s"]["startingBet"].value;
	console.log(startingBet);
	var highestAmountWonRollCount = 0;
	var highestAmountWon = 0;
	if(startingBet != 0){
		while (startingBet > 0){
			if(rollDice() == true){
				startingBet = startingBet + 4;
				highestAmountWonRollCount = rollCount;
					if(startingBet > highestAmountWon){
						highestAmountWon = startingBet;
						console.log("The highest amount won so far is: " + highestAmountWon + 
						". The current highestAmountWonRollCount is: " + highestAmountWonRollCount);
					}
			}
			else{
				startingBet--;
				console.log("Lost. Current dice roll: " + rollCount + ". Currently have: " + startingBet);
			}
		}
	}
	else{
		alert("Please enter a number higher than zero.");
	}
	return false;
}

function resetGame(){
	document.forms["lucky7s"]["startingBet"].value = "";
	document.getElementById("results").style.display = "block";
}