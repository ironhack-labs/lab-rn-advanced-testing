
import React from 'react';

interface BoardProps {
  boardState: string[];
}

const Board: React.FC<BoardProps> = ({ boardState }) => {
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
