import React from "react";
import Board from "./Board";
import "./TicTac.css";
function TicTac() {
  return (
    <div className="TicTac min-h-screen flex flex-col justify-center items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1 className="font-game-head text-4xl my-10">TIC TAC TOE</h1>
      <Board />
    </div>
  );
}

export default TicTac;
