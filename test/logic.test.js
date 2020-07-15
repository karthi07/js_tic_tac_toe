import { checkTie } from '../javascript/logic';

let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
test('check tie for non tie board', () => {
  board = ['X', 'X', 'O', ' ', ' ', ' ', ' ', ' ', ' '];
  expect(checkTie(board)).toBe(false);
});

test('check tie for a tie board', () => {
  board = ['O', 'X', 'O', 'O', 'X', 'X', 'X', 'O', 'X'];
  expect(checkTie(board)).toBe(true);
});