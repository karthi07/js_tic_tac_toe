/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-use-before-define */
/* global player, checkWinning, checkTie */
const GameBoard = (() => {
  let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

  const player1 = player('player1', 'X');
  const player2 = player('player2', 'O');
  let gameStatus = '';
  let winner;

  let currentPlayer = player1;

  const render = () => {
    const boardctn = document.querySelector('#board-ctn');
    const status = document.querySelector('#status');
    let result = ' ';
    if (gameStatus === 'won') {
      result = `${winner.playerName} Won the Game ! `;
      changeEventListener();
    } else if (gameStatus === 'tie') {
      result = 'Game Tied ! <small> Restart the game</small>';
      changeEventListener();
    } else {
      result = `${currentPlayer.playerName}'s Turn (${currentPlayer.token}) : `;
    }

    status.innerHTML = result;
    boardctn.innerHTML = '';
    for (const i in board) {
      const btn = `<button class="btn board-pos btn-info" 
     data-id=${i} ${
    board[i] !== ' ' || gameStatus !== 'play' ? 'disabled' : ''
  }> ${board[i]} </button>`;
      boardctn.innerHTML += btn;
    }
  };

  const updateBoard = (position) => {
    if (board[position] === ' ') {
      board[position] = currentPlayer.token;

      if (checkWinning(board)) {
        gameStatus = 'won';
        winner = currentPlayer;
      } else if (checkTie(board)) {
        gameStatus = 'tie';
      }
      currentPlayer = currentPlayer === player1 ? player2 : player1;
      render();
    }
  };

  const resetBoard = () => {
    board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    currentPlayer = player1;
    gameStatus = 'play';
    changeEventListener();
  };

  document.querySelector('.restart').addEventListener('click', () => {
    resetBoard();
    render();
  });

  const changeEventListener = () => {
    document.querySelector('.btn-ctn').addEventListener('click', (e) => {
      if (e.target.classList.contains('btn') && gameStatus === 'play') {
        updateBoard(e.target.dataset.id);
      }
    });
  };

  return {
    render,
    player1,
    player2,
    resetBoard,
  };
})();
document.querySelector('#game-ctn').style.display = 'none';

// form Listener
const form = document.querySelector('#user-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  GameBoard.player1.playerName = document.querySelector('#player1').value;
  GameBoard.player2.playerName = document.querySelector('#player2').value;
  document.querySelector('#player1').value = '';
  document.querySelector('#player2').value = '';
  e.target.style.display = 'none';
  GameBoard.resetBoard();
  GameBoard.render();

  document.querySelector('#game-ctn').style.display = 'block';
});
