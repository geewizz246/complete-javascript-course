/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


// // NOTE:
// // textContent vs innerHTML: https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#Differences_from_innerHTML
// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = `<em>${dice}</em>`;
// 
// // Changing styles
// document.querySelector('.dice').style.display = 'none';
// 
// // Events: https://developer.mozilla.org/en-US/docs/Web/Events


// Declare game elements
let scores, roundScore, activePlayer, dice,
    scoreDOMs, currentDOMs, panelDOMs, nameDOMs;

scores = [ 0, 0 ];
roundScore = 0;
activePlayer = 0;

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
]

// Register buttons 
btnRoll = document.querySelector('.btn-roll');
btnHold = document.querySelector('.btn-hold');
btnNewGame = document.querySelector('.btn-new');



/*****************************************************************************
 ************ SUPPORTING FUNCTIONS
 *****************************************************************************/

/** Rolls a random number between 1 and 6. */
var rollDice = () => {
    // 1. Generate the number for the dice
    dice = Math.ceil(Math.random() * 6);
    
    // 2. Display the corresponding dice image
    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = `dice-${dice}.png`;

    // 3. Update the round score IF the rolled number was NOT a 1
    if (dice !== 1) {
        // Add the dice value to round score
        roundScore += dice;

        // Display the player's new round score
        currentDOMs[activePlayer].textContent = roundScore;

        // Check for a winner 
        checkForWinner();
    } else {
        // Reset round score to 0
        roundScore = 0;

        // Hide the dice
        diceDOM.style.display = 'none';

        // Display the player's new round score
        currentDOMs[activePlayer].textContent = roundScore;

        // Update the active player
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

/** Sets up a new game. */
function init() {
    for (let i = 0; i < 2; i++) {
        panelDOMs[i].classList.remove('winner');        // Reset player panels
        nameDOMs[i].textContent = 'Player ' + (i + 1);  // Reset player names
        scoreDOMs[i].textContent = '0';                 // Reset player global scores 
        currentDOMs[i].textContent = '0';               // Reset player round scores
    }

    // Player 1 goes first 
    nextPlayer(0);

    // Add the functionality for buttons
    // Callback through anonymous function
    // When the player clicks 'NEW GAME', reset the game board. 
    btnNewGame.addEventListener('click', init);
    
    // When the player rolls the dice... 
    btnRoll.addEventListener('click', rollDice);

    // When the player chooses to hold... 
    btnHold.addEventListener('click', hold);
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
}

/** Check to see if someone won the game */
function checkForWinner() {
    // If the active player has a score >= 100... 
    if (scores[activePlayer] + roundScore >= 100) {
        // Set and display final scores
        scores[activePlayer] += roundScore;
        scoreDOMs[activePlayer].textContent = scores[activePlayer];
        currentDOMs[activePlayer].textContent = '0';

        // Display winner
        nameDOMs[activePlayer].textContent = 'WINNER!';
        panelDOMs[activePlayer].classList.remove('active');
        panelDOMs[activePlayer].classList.add('winner');
        
        // Remove button functionality
        btnRoll.removeEventListener('click', rollDice);
        btnHold.removeEventListener('click', hold);
    }
}



// Create a new game on page load 
init();
