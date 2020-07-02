const GameBoard = () => {
  let board = ["", "", "", "", "", "", "", "", ""];
  const addmove = (token, position) => {
    if (board[position] == "") {
      board[position] = token;
    }
  };
  return { board };
};
