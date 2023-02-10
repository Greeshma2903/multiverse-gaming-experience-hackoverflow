import React, { useState } from "react";
import Square from "./Square";
import "./TicTac.css";

function Board() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [X, setX] = useState(true);

  const winner = calculateWinner(square);
  let status;
  
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Player Turn: " + (X ? "X" : "O");
  }

  const renderSquare = (i) => {
    return <Square value={square[i]} onClick={() => handleClick(i)} />;
  };

  const handleClick = (i) => {
    const squares = square.slice();
    if (squares[i] === null) {
      squares[i] = X ? "X" : "O";
      setSquare(squares);
      setX(!X);
    } else {
      alert("Can't do that");
    }
  };

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  }

  return (
    <div className="board bg-green-50 p-4 rounded">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>

      <div className="alert border my-2">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info flex-shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>{status}</span>
        </div>
      </div>
    </div>
  );
}

export default Board;
