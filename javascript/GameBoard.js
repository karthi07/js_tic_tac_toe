/* eslint-disable no-unused-vars */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-use-before-define */
/* global player, checkWinning, checkTie */
import { checkTie, checkWinning, player } from './logic';

export let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

export let currentPlayer;

export const player1 = player('player1', 'X');
export const player2 = player('player2', 'O');
let gameStatus = '';
let winner;

currentPlayer = player1;

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
     data-id=${i} ${board[i] !== ' ' || gameStatus !== 'play' ? 'disabled' : ''}> ${board[i]} </button>`;
    boardctn.innerHTML += btn;
  }
};

export const updateBoard = (position) => {
  if (board[position] === ' ') {
    board[position] = currentPlayer.token;

    if (checkWinning(board)) {
      gameStatus = 'won';
      winner = currentPlayer;
    } else if (checkTie(board)) {
      gameStatus = 'tie';
    }
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  }
};

export const resetBoard = () => {
  board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
  currentPlayer = player1;
  gameStatus = 'play';
};

const changeEventListener = () => {
  document.querySelector('.btn-ctn').addEventListener('click', (e) => {
    if (e.target.classList.contains('btn') && gameStatus === 'play') {
      updateBoard(e.target.dataset.id);
      render();
    }
  });
};

const gamectnDisplay = () => { document.querySelector('#game-ctn').style.display = 'none'; };

const restartListener = () => document.querySelector('.restart').addEventListener('click', () => {
  resetBoard();
  changeEventListener();
  render();
});

// // form Listener
export const form = document.querySelector('#user-form');
const formListerner = () => form.addEventListener('submit', (e) => {
  e.preventDefault();
  player1.playerName = document.querySelector('#player1').value;
  player2.playerName = document.querySelector('#player2').value;
  document.querySelector('#player1').value = '';
  document.querySelector('#player2').value = '';
  e.target.style.display = 'none';
  resetBoard();
  changeEventListener();
  render();

  document.querySelector('#game-ctn').style.display = 'block';
});

// document.onload = () => {
//   gamectnDisplay();
//   restartListener();
//   formListerner();
// };