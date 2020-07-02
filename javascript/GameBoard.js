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
    const container = document.querySelector(".container");
    container.innerHTML = ` 
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
  };

  return {
    board,
    updateBoard,
    render,
  };
})();

GameBoard.render();

document.querySelector(".btn-ctn").addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    e.target.innerHTML = e.target.dataset.id;
  }
});
