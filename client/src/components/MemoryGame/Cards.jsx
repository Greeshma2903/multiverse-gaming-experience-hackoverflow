import { useEffect, useState } from "react";
import Card from "./Card";
import "./MemoryGame.css";
import batman from "../../assets/batman.jpg";
import bp from "../../assets/bp.jpg";
import deadpool from "../../assets/deadpool.jpg";
import flash from "../../assets/flash.jpg";
import spidey from "../../assets/spidey.jpg";
import superman from "../../assets/superman.jpg";
import thor from "../../assets/thor.jpg";
import wonderwomen from "../../assets/wonderwomen.jpg";
import Reload from "./Reload";

function Cards() {
  const [items, setItems] = useState(
    [
      { id: 1, img: wonderwomen, stat: "" },
      { id: 1, img: wonderwomen, stat: "" },
      { id: 2, img: bp, stat: "" },
      { id: 2, img: bp, stat: "" },
      { id: 3, img: deadpool, stat: "" },
      { id: 3, img: deadpool, stat: "" },
      { id: 4, img: flash, stat: "" },
      { id: 4, img: flash, stat: "" },
      { id: 5, img: thor, stat: "" },
      { id: 5, img: thor, stat: "" },
      { id: 6, img: superman, stat: "" },
      { id: 6, img: superman, stat: "" },
      { id: 7, img: batman, stat: "" },
      { id: 7, img: batman, stat: "" },
      { id: 8, img: spidey, stat: "" },
      { id: 8, img: spidey, stat: "" },
    ].sort(() => Math.random() - 0.5)
  );
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const gameState = items.findIndex((ele) => ele.stat === "");
    if (gameState === -1) setGameOver(true);
  }, [items]);
  const [prev, setPrev] = useState(-1);

  function check(current) {
    if (items[current].id === items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  }

  return !gameOver ? (
    <div className="container w-1/2">
      {items.map((item, index) => (
        <Card key={index} item={item} id={index} handleClick={handleClick} />
      ))} 
    </div>
  ) : (
    <Reload/>
  );
}

export default Cards;
