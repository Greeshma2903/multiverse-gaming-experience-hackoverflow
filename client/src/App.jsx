import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import MemoryGame from "./pages/MemoryGame";
import Home from "./components/Home/Home";
import QuizGame from "./components/QuizGame/QuizGame";
import Unihome from "./components/UniHome/Unihome";
import Profile from "./components/Profile/Profile";
import HomeContent from "./components/UniHome/HomeContext";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/memorygame" element={<MemoryGame />} />

        {/* on authentication */}
        <Route element={<Unihome />}>
          <Route path="/universe" element={<HomeContent />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
