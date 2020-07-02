const GameBoard = (() => {
  let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

  const player = (playerName, token) => {
    return { playerName, token };
  };

  let player1 = player("player1", "X");
  let player2 = player("player2", "O");
  let gameStatus = "play";
  let Winner;
  let isTie = false;

  let currentPlayer = player1;

  const updateBoard = (token, position) => {
    if (board[position] == " ") {
      board[position] = currentPlayer.token;
      checkTie();
      checkWinning();
      currentPlayer = currentPlayer == player1 ? player2 : player1;
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
  };

  document.querySelector(".restart").addEventListener("click", () => {
    resetBoard();
    render();
  });

  const render = () => {
    const container = document.querySelector(".container");
    let result = " ";
    if (gameStatus === "won") {
      result = Winner.playerName + " Won the Game ! ";
    } else if (gameStatus === "tie") {
      result = "Game Tied ! Restart the game";
    } else {
      result =
        " player " +
        currentPlayer.playerName +
        "'s Turn (" +
        currentPlayer.token +
        ") : ";
    }
    container.innerHTML = ` 
     <h3> ${result} </h3>
    <div class="btn-ctn col-md-4">
      
     <button class="btn board-pos btn-info" data-id=0> ${board[0]} </button>
     <button class="btn board-pos btn-info" data-id=1> ${board[1]} </button>
     <button class="btn btn-info board-pos" data-id=2> ${board[2]} </button>
     <div class="w-100"></div>
     
     <button class="btn btn-info board-pos" data-id=3> ${board[3]} </button>
     <button class="btn btn-info board-pos" data-id=4> ${board[4]} </button>
     <button class="btn btn-info board-pos" data-id=5> ${board[5]} </button>
     
     <div class="w-100"></div>
     <button class="btn btn-info board-pos" data-id=6> ${board[6]} </button>
     <button class="btn btn-info board-pos" data-id=7> ${board[7]} </button>
     <button class="btn btn-info board-pos" data-id=8> ${board[8]} </button>
     
    </div>
    `;
    if (gameStatus == "play") {
      document.querySelector(".btn-ctn").addEventListener("click", (e) => {
        if (e.target.classList.contains("btn")) {
          GameBoard.updateBoard(currentPlayer.token, e.target.dataset.id);
          GameBoard.render();
        }
      });
    }
  };

  return {
    player1,
    player2,
    board,
    resetBoard,
    updateBoard,
    render,
  };
})();

GameBoard.player1.playerName = "Karthick";
GameBoard.player2.playerName = "Evans";
GameBoard.currentPlayer = GameBoard.player1;
//current player
//switche player
//check winning

GameBoard.render();
