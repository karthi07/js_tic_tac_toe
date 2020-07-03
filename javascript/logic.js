/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
const winCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWinning(board) {
  let response = false;
  winCombination.forEach((combo) => {
    const first = combo[0];
    const second = combo[1];
    const third = combo[2];
    if (
      board[first] === board[second]
      && board[first] === board[third]
      && board[first] !== ' '
    ) {
      response = true;
    }
  });

  return response;
}

function checkTie(board) {
  let tie = true;
  for (const val of board) {
    if (val === ' ') {
      tie = false;
    }
  }
  return tie;
}

const player = (playerName, token) => ({ playerName, token });
