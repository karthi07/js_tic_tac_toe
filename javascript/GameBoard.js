const GameBoard = (() => {

  let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

  const updateBoard = (token, position) => {
    if (board[position] == " ") {
      board[position] = token;
    }
  };

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

  const render = () => {
    const container = document.querySelector('.container')
    container.innerHTML = `
    ${ board[0]} | ${ board[1]} | ${ board[2]}
    <hr>
    ${ board[3]} | ${ board[4]} | ${ board[5]}
    <hr>
    ${ board[6]} | ${ board[7]} | ${ board[8]}
    `
  };



  return { 
    board,
    updateBoard,
    render };
})();

GameBoard.render();