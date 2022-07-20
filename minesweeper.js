document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
const board = {
  cells: [
    {
      row: 0,
      col: 0,
      isMine: false,
      hidden: true,
      isMarked: false,
      surroundingMines: 0,
    },
    {
      row: 0,
      col: 1,
      isMine: true,
      hidden: true,
      isMarked: false,
      surroundingMines: 0,
    },
    {
      row: 0,
      col: 2,
      isMine: false,
      hidden: true,
      isMarked: false,
      surroundingMines: 0,
    },
    {
      row: 1,
      col: 0,
      isMine: true,
      hidden: true,
      isMarked: false,
      surroundingMines: 0,
    },
    {
      row: 1,
      col: 1,
      isMine: false,
      hidden: true,
      isMarked: false,
      surroundingMines: 0,
    },
    {
      row: 1,
      col: 2,
      isMine: true,
      hidden: true,
      isMarked: false,
      surroundingMines: 0,
    },
    {
      row: 2,
      col: 0,
      isMine: false,
      hidden: true,
      isMarked: false,
      surroundingMines: 0,
    },
    {
      row: 2,
      col: 1,
      isMine: false,
      hidden: true,
      isMarked: false,
      surroundingMines: 0,
    },
    {
      row: 2,
      col: 2,
      isMine: false,
      hidden: true,
      isMarked: false,
      surroundingMines: 0,
    },
  ],
}

function startGame() {
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
  board.cells.forEach((cell) => {
    console.log(cell)
    cell.surroundingMines = countSurroundingMines(cell)
  })
  document.addEventListener('contextmenu', checkForWin)
  document.addEventListener('click', checkForWin)
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin() {
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')

  let mineCells = []
  let emptyCells = []

  board.cells.forEach((cell) => {
    // create an array with all mine cells
    // check that array to see if every cell matches that condition
    if (cell.isMine === true) {
      mineCells.push(cell)
    } else {
      emptyCells.push(cell)
    }
  })

  if (mineCells.every((cell) => cell.isMarked === true)) {
    lib.displayMessage('You win!')
    return
  }
  if (emptyCells.every((cell) => cell.hidden === false)) {
    lib.displayMessage('You win!')
    return
  }
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   const surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines(cell) {
  const surrounding = lib.getSurroundingCells(cell.row, cell.col)
  let mineCount = 0

  for (let i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine === true) {
      mineCount++
    }
  }
  return mineCount
}

function createCell(row, col) {
  return {
    row: row,
    col: col,
    isMine: randomNum(),
    hidden: true,
    isMarked: false,
    surroundingMines: 0,
  }
}

function randomNum() {
  let num = Math.random()
  if (num < 0.5) {
    return true
  } else {
    return false
  }
}

function createBoard() {
  let row = prompt('How many rows would you like?')
  let col = prompt('How many columns would you like?')
  let board = {}
  board.cells = []
  let rowCount = 0

  // loop row
  for (let i = 0; i < row; i++) {}

  // for (let i = 0; i < row * col; i++) {
  //   // row = 5
  //   // col = 5

  //   if (i === col) {
  //     rowCount++
  //   }
  //   let cell = createCell(rowCount, i)
  //   board.cells.push(cell)
  // }

  return board
}

let newBoard = createBoard()
console.log(newBoard)
