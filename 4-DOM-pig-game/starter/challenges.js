/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

/**
 * DONE: 1, 2, 3
 */

// Declare game elements
let scores, roundScore, activePlayer, dice, diceHistory, winningScore,
    scoreDOMs, currentDOMs, panelDOMs, nameDOMs, winningScoreDOM;

scores = [ 0, 0];

scoreDOMs = [ 
    document.getElementById('score-0'),
    document.getElementById('score-1')
];

currentDOMs = [
    document.getElementById('current-0'),
    document.getElementById('current-1')
];

panelDOMs = [
    document.querySelector('.player-0-panel'),
    document.querySelector('.player-1-panel')
];

nameDOMs = [
    document.getElementById('name-0'),
    document.getElementById('name-1')
];

winningScoreDOM = document.getElementById('winning-score-input');

// Change winning score on every 
winningScoreDOM.oninput = () => {
    winningScore = winningScoreDOM.value;
    console.log(winningScore);
}


// Register buttons 
btnRoll = document.querySelector('.btn-roll');
btnHold = document.querySelector('.btn-hold');
btnNewGame = document.querySelector('.btn-new');



/*****************************************************************************
 ************ SUPPORTING FUNCTIONS
 *****************************************************************************/

/** Rolls a random number between 1 and 6. */
var rollDice = () => {
    // 1. Generate two random values for the dice roll
    dice = [
        Math.ceil(Math.random() * 6),
        Math.ceil(Math.random() * 6)
    ];
    
    // 2. Display the corresponding dice image
    let diceDOM = [
        document.getElementById('dice-1'),
        document.getElementById('dice-2')
    ];
    for (let i = 0; i < diceDOM.length; i++) {
        diceDOM[i].style.display = 'block';
        diceDOM[i].src = 'dice-' + dice[i] + '.png';
    }

    // 3. Check if the active player rolled two sixes in a row
    hasRolledSixesTwice = (dice[0] === 6 || dice[1] === 6) && (diceHistory[0] === 6 || diceHistory[1] === 6);

    // 4. Add this dice roll to the dice history
    diceHistory = [ dice[0], dice[1] ];

    // 5a. Active player loses their entire score IF they have rolled two sixes in a row
    if (hasRolledSixesTwice) {
        // Reset the active player's entire score to 0
        roundScore = 0;
        scores[activePlayer] = 0;

        // Display the active player's score after the reset
        currentDOMs[activePlayer].textContent = '0';
        scoreDOMs[activePlayer].textContent = '0';

        // Change the active player
        nextPlayer();
    } 
    // 5b. Update the round score IF a 1 was NOT rolled
    else if (dice[0] !== 1 && dice[1] !== 1) {
        // Add the dice value to round score
        roundScore += dice.reduce((a, b) => { return a + b }, 0);

        // Display the player's new round score
        currentDOMs[activePlayer].textContent = roundScore;

        // Check for a winner 
        checkForWinner();
    } 
    // 5c. Reset the round score to 0 IF a 1 was rolled
    else {
        // Reset round score to 0
        roundScore = 0;

        // // Hide the dice
        // diceDOM.forEach(DOM => { DOM.style.display = 'none'; });

        // Display the player's new round score
        currentDOMs[activePlayer].textContent = roundScore;

        // Change the active player
        nextPlayer();
    }
}

/** Holds the round score and adds it to the active player's score. */
var hold = () => {
    // 1. Add the round score to the active player's score
    scores[activePlayer] += roundScore;

    // 2. Display the player's new score
    scoreDOMs[activePlayer].textContent = scores[activePlayer];

    // 3. Reset player's round score to 0 and display it
    roundScore = 0;
    currentDOMs[activePlayer].textContent = roundScore;

    // 4. Update the active player
    nextPlayer();
}



// Add game button functionality
btnNewGame.addEventListener('click', init);
btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', hold);

/** Sets up a new game. */
function init() {
    for (let i = 0; i < 2; i++) {
        scores[i] = 0;
        panelDOMs[i].classList.remove('winner');        // Reset player panels
        nameDOMs[i].textContent = 'Player ' + (i + 1);  // Reset player names
        scoreDOMs[i].textContent = '0';                 // Reset player global scores 
        currentDOMs[i].textContent = '0';               // Reset player round scores
    }
    
    // Winning score is 100 by default
    winningScore = 100;
    winningScoreDOM.value = winningScore;

    // Set round score
    roundScore = 0;

    // Player 1 goes first 
    nextPlayer(0);

    // Enable game buttons
    btnNewGame.disabled = false;
    btnRoll.disabled = false;
    btnHold.disabled = false;
}

/**
 * Selects the next active player.
 * 
 * @param {Number} player (optional) The player to make active.
 */
function nextPlayer(player = Number(!activePlayer)) {
    activePlayer = Number(!player);

    panelDOMs[activePlayer].classList.remove('active');
    activePlayer = Number(!activePlayer);
    panelDOMs[activePlayer].classList.add('active');

    // Reset the dice history
    diceHistory = [ 0, 0 ];
}

/** Check to see if someone won the game */
function checkForWinner() {
    // If the active player has a score >= winningScore... 
    if (scores[activePlayer] + roundScore >= winningScore) {
        // Set and display final scores
        scores[activePlayer] += roundScore;
        scoreDOMs[activePlayer].textContent = scores[activePlayer];
        currentDOMs[activePlayer].textContent = '0';

        // Display winner
        nameDOMs[activePlayer].textContent = 'WINNER!';
        panelDOMs[activePlayer].classList.remove('active');
        panelDOMs[activePlayer].classList.add('winner');

        // Disable winning score input
        winningScoreDOM.disabled = true;
        
        // Disable game progression buttons
        btnRoll.disabled = true;
        btnHold.disabled = true;
    }
}



// Create a new game on page load 
init();
