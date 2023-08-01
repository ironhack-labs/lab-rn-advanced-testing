// Enum para representar los posibles valores de una celda
export enum CellValue {
  X = 'X',
  O = 'O',
  Empty = '_',
}

// Enum para representar el estado del juego
export enum GameStatus {
  Ongoing = 'ONGOING',
  Won = 'WON',
  Draw = 'DRAW',
}

// Funcion para inicializar el tablero vacio
export function initializeGameBoard(): CellValue[][] {
  return [
    [CellValue.Empty, CellValue.Empty, CellValue.Empty],
    [CellValue.Empty, CellValue.Empty, CellValue.Empty],
    [CellValue.Empty, CellValue.Empty, CellValue.Empty],
  ];
}
// Funcion para verificar que jugador gano
export function checkWinner(board: CellValue[][], player: CellValue): boolean {
  // Se comprueban las filas
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] === player &&
      board[i][1] === player &&
      board[i][2] === player
    ) {
      return true;
    }
  }

  // Se comprueban las columnas
  for (let i = 0; i < 3; i++) {
    if (
      board[0][i] === player &&
      board[1][i] === player &&
      board[2][i] === player
    ) {
      return true;
    }
  }

  // Se comprueban las lineas diagonales
  if (
    board[0][0] === player &&
    board[1][1] === player &&
    board[2][2] === player
  ) {
    return true;
  }
  if (
    board[0][2] === player &&
    board[1][1] === player &&
    board[2][0] === player
  ) {
    return true;
  }

  return false;
}

// Funcion para verificar si el juego termino en empate
export function checkDraw(board: CellValue[][]): boolean {
  // Si no hay celdas vacias en el tablero termina en empate
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === CellValue.Empty) {
        return false;
      }
    }
  }
  return true;
}

// Funcion para cambio de jugador por cada movimiento referenciado por "O" o "X"
export function togglePlayer(player: CellValue): CellValue {
  return player === CellValue.X ? CellValue.O : CellValue.X;
}
