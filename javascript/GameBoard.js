const GameBoard = (() => {
  let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

  const player = (playerName, token) => {
    return { playerName, token };
  };

  let player1 = player("player1", "X");
  let player2 = player("player2", "O");
  let gameStatus = "play";
  let Winner;

  let currentPlayer = player1;

  const updateBoard = (token, position) => {
    if (board[position] == " ") {
      board[position] = currentPlayer.token;
      checkTie();
      checkWinning();
      currentPlayer = currentPlayer == player1 ? player2 : player1;
      render();
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

  const checkTie = () => {
    let tie = true;
    for (val of board) {
      if (val == " ") {
        tie = false;
      }
    }
    if (tie == true) {
      gameStatus = "tie";
    }
    return tie;
  };

  const checkWinning = () => {
    let response = false;

    winCombination.forEach((combo) => {
      const first = combo[0];
      const second = combo[1];
      const third = combo[2];
      if (
        board[first] === board[second] &&
        board[first] === board[third] &&
        board[first] !== " "
      ) {
        response = true;
        gameStatus = "won";
        Winner = currentPlayer;
      }
    });

    return response;
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

  const render = () => {
    const boardctn = document.querySelector("#board-ctn");
    const status = document.querySelector("#status");
    let result = " ";

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

  const changeEventListener = () => {
    document.querySelector(".btn-ctn").addEventListener("click", (e) => {
      if (e.target.classList.contains("btn") && gameStatus === "play") {
        updateBoard(currentPlayer.token, e.target.dataset.id);
      }
    });
  };

  return {
    player1,
    player2,
    resetBoard,
    render,
  };
})();

// GameBoard.player1.playerName = "Karthick";
// GameBoard.player2.playerName = "Evans";
GameBoard.resetBoard();
GameBoard.render();
