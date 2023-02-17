import Cards from "./Cards";
import Reload from "./Reload";
import "./MemoryGame.css";
import { useState } from "react";
import { funActions } from "../../store/funtopiaSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function MemoryGame() {
  const [gameCount, setGameCount] = useState(0);
  const dispatch = useDispatch();
  const memoryCount = useSelector((state) => state.fun.memoryCount);

  const updateGameCounter = () => {
    const cnt = gameCount + 1;
    setGameCount(cnt);

    dispatch(funActions.getMemoryGameCount(cnt));
  };
  console.log(memoryCount);
  return (
    <section className="Memory min-h-screen py-8 bg-gradient-to-r from-green-400 to-blue-500 flex flex-col items-center">
      <h1 className="text-4xl font-game-head text-center my-5">Memory Game</h1>
      <div className="badge badge-outline shadow-sm w-1/4 my-3 outline-dashed outline-1">
        <div>
          Games played: {memoryCount}
        </div>
      </div>
      <Cards counter={updateGameCounter} />
    </section>
  );
}

export default MemoryGame;
