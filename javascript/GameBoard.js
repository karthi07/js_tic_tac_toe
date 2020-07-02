const GameBoard = (() => {
  let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

  let player1 = player("player1", "X");
  let player2 = player("player2", "O");
  let gameStatus = "play";
  let Winner;

  let currentPlayer = player1;

  const updateBoard = (position) => {
    if (board[position] == " ") {
      board[position] = currentPlayer.token;

      if (checkWinning(board)) {
        gameStatus = "won";
        Winner = currentPlayer;
      } else if (checkTie(board)) {
        gameStatus = "tie";
      }
      currentPlayer = currentPlayer == player1 ? player2 : player1;
      render();
    }
  };

  const render = () => {
    const boardctn = document.querySelector("#board-ctn");
    const status = document.querySelector("#status");
    let result = " ";
    // console.log("game status: " + board);
    if (gameStatus === "won") {
      result = Winner.playerName + " Won the Game ! ";
      changeEventListener();
    } else if (gameStatus === "tie") {
      result = "Game Tied ! <small> Restart the game</small>";
      changeEventListener();
    } else {
      result =
        currentPlayer.playerName + "'s Turn (" + currentPlayer.token + ") : ";
    }

    status.innerHTML = result;
    boardctn.innerHTML = "";
    for (i in board) {
      btn = `<button class="btn board-pos btn-info" 
     data-id=${i} ${board[i] != " " ? "disabled" : ""}> ${board[i]} </button>`;
      boardctn.innerHTML += btn;
    }
  };

  const resetBoard = () => {
    board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    currentPlayer = player1;
    gameStatus = "play";
    changeEventListener();
  };

  document.querySelector(".restart").addEventListener("click", () => {
    resetBoard();
    render();
  });

  const changeEventListener = () => {
    document.querySelector(".btn-ctn").addEventListener("click", (e) => {
      if (e.target.classList.contains("btn") && gameStatus === "play") {
        updateBoard(e.target.dataset.id);
      }
    });
  };

  return {
    render,
    resetBoard,
  };
})();

// GameBoard.player1.playerName = "Karthick";
// GameBoard.player2.playerName = "Evans";
GameBoard.resetBoard();

GameBoard.render();
