import Cards from "../components/MemoryGame/Cards";
import Reload from "../components/MemoryGame/Reload";
import '../components/MemoryGame/MemoryGame.css'

function MemoryGame() {
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <Cards />
    </div>
  );
}

export default MemoryGame;
