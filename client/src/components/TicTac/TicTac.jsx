import React from 'react';
import Board from './Board';
import './TicTac.css'
function TicTac() {
  return (
    <div className="TicTac">
      <h1 className="header">TIC TAC TOE</h1>
      <Board />
    </div>
  );
}

export default TicTac;