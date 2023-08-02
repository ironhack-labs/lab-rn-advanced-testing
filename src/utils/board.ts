import { BoardState, Moves } from "./types";

export const printBoard = (state: BoardState):void => {
  let formatString = "";
  state.forEach((cell, index) => {
    formatString += cell ? ` ${cell} |` : '   |';
    if((index + 1) % 3 === 0) {
      formatString = formatString.slice(0, -1)
      if(index < 8 ) {
        formatString += "\n\u2015\u2015\u2015 \u2015\u2015\u2015 \u2015\u2015\u2015\n"
      }
    }
  })
  console.log(formatString);
};

export const isEmpty = (state: BoardState): boolean => {
  return state.every(cell => cell === null)
};

export const isFull = (state: BoardState): boolean => {
  return state.every(cell => cell)
};


export const getAvailableMoves = (state: BoardState): Moves[] => {
  const moves: Moves[] = [];
  state.forEach((cell, idx) => {
    if(cell === null){
      moves.push(idx as Moves)
    }
  })
  return moves;
}