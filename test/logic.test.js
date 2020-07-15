import { checkTie, checkWinning } from '../javascript/logic';

let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

test('check tie for non tie board', () => {
  board = ['X', 'X', 'O', ' ', ' ', ' ', ' ', ' ', ' '];
  expect(checkTie(board)).toBe(false);
});

test('check tie for a tie board', () => {
  board = ['O', 'X', 'O', 'O', 'X', 'X', 'X', 'O', 'X'];
  expect(checkTie(board)).toBe(true);
});

test('check not wining for normal case', () => {
  board = ['X', 'O', 'X', 'O', ' ', ' ', ' ', ' ', 'X'];
  expect(checkWinning(board)).toBe(false);
});

test('check horizontal win case', () => {
  board = ['X', 'X', 'X', 'O', 'X', 'O', 'O', 'O', 'X'];
  expect(checkWinning(board)).toBe(true);
});

test('check vertical win case', () => {
  board = ['X', 'O', 'X', 'X', 'X', 'O', 'X', 'O', 'X'];
  expect(checkWinning(board)).toBe(true);
});

test('check diagonal win case', () => {
  board = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];
  expect(checkWinning(board)).toBe(true);
});