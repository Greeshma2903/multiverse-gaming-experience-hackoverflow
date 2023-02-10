import { Route, Routes } from "react-router-dom";
import Funtopia from "../../pages/Funtopia";
import MemoryGame from "../MemoryGame/MemoryGame";
import TicTac from "../TicTac/TicTac";
import QuizGame from "../QuizGame/QuizGame";

const FuntopiaRoute = () => {
  return (
    <Routes>
      <Route>
        <Route index element={<Funtopia />} />
        <Route path="memorygame" element={<MemoryGame />} />
        <Route path="tictactoe" element={<TicTac />} />
        <Route path="quizzards" element={<QuizGame />} />
        <Route path="*" element={<h1>not found</h1>} />
      </Route>
    </Routes>
  );
};
export default FuntopiaRoute;
