
import React from 'react';

export const Board = () => {
  const gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  return (
    <div className="board">
      {gameBoard.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, columnIndex) => (
            <div key={columnIndex} className="cell">
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
