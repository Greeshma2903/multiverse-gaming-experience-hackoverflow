import Cards from "./Cards";
import Reload from "./Reload";
import './MemoryGame.css'

function MemoryGame() {
  return (
    <section className="Memory min-h-screen py-8 bg-gradient-to-r from-green-400 to-blue-500">
      <h1 className="text-4xl font-game-head text-center my-5">Memory Game</h1>
      <Cards />
    </section>
  );
}

export default MemoryGame;
