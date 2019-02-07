/*----- constants -----*/
var origBoard;
const players = {
    '1': {
        innerText: 'X'
    },
    '-1': {
        innerText: 'O'
    },
};

const winCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];



/*----- app's state (variables) -----*/
// let gameWon = checkWin()
let playerOneMoves = []
let playerTwoMoves = []


/*----- cached element references -----*/
const cells = document.querySelectorAll('.cell');
const replayBtn = document.getElementById('replay');
var message = document.querySelector('h1');

/*----- event listeners -----*/

document.querySelector('table').addEventListener('click', playerTurn);
replayBtn.addEventListener('click', init);

/*----- functions -----*/


init();



function playerTurn(evt) {
    let move = evt.target.closest('td');
    var i = turn;
    if (move.innerText === '') {
        move.innerText = players[i].innerText;
        if (i === 1) {
            var numMove = parseInt((move.id));
            playerOneMoves.push(numMove);
        } else if (i === -1) {
            numMove = parseInt((move.id));
            playerTwoMoves.push(numMove);
        }
        turn *= -1;
        winner = getWinner();
        render();
        console.log(winner);
    }

}


function getWinner() {
    for (var i = 0; i < winCombos.length; i++) {
        if (playerOneMoves.includes(winCombos[i][0]) && playerOneMoves.includes(winCombos[i][1]) && playerOneMoves.includes(winCombos[i][2])) {
            console.log(1);
            return '1';
        }
        if (playerTwoMoves.includes(winCombos[i][0]) && playerTwoMoves.includes(winCombos[i][1]) && playerTwoMoves.includes(winCombos[i][2])) {
            return '-1';
        }
    }
    if (origBoard.includes(null)) {
        return null;
    }
    return 'T';
}



function init() {
    playerOneMoves = [];
    playerTwoMoves = [];
    message.innerHTML = '';
    origBoard = new Array(9).fill(null);
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
    }
    turn = 1;
    winner = null;
    
}

function render() {
    if (winner === '1') {
        message.innerHTML = `Congrats Player One`
    } else if (winner === '-1') {
        message.innerHTML = `Congarts Player Two`
    } else if (winner === 'T') {
        message.innerHTML = 'You tied!';
    }
}






// playerOneMoves.push(squareId);
// playerTwoMoves.push(squareId);
// for (let i = 0; i < winCombos.length; i++) {
//     if (winComnos[i] === playerOneMoves) {
//        console.log("Congrats Player One");
//     } else if (winCombos[i] === playerTwoMoves) {
//         console.log("Congrats Player Two");
//     } else {
//         console.log("Tie Game");
//     }
// }


