import {
  board, currentPlayer, player1, player2, updateBoard, resetBoard,
} from '../javascript/GameBoard';

test('Update board using player 1', () => {
  currentPlayer.token = player1.token;

  updateBoard(0);
  expect(board).toEqual(['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
});

test('Update board using player 2', () => {
  currentPlayer.token = player2.token;

  updateBoard(1);
  expect(board).toEqual(['X', 'O', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
});

test('should Update board on occupied position', () => {
  currentPlayer.token = player1.token;
  // shouldnt update the borad. it should be the old version
  updateBoard(1);
  expect(board).toEqual(['X', 'O', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
});

test('Reset the board', () => {
  resetBoard();
  expect(board).toEqual([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
});
