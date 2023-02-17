import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./components/Home/Home";
import Unihome from "./pages/Unihome";
import Profile from "./components/Profile/Profile";
import HomeContent from "./components/UniHome/HomeContext";
import Explore from "./components/Explore/Explore";
import FuntopiaRoute from "./components/Funtopia/FuntopiaRoute";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />

        {/* on authentication */}
        <Route element={<Unihome />}>
          <Route path="/universe" element={<HomeContent />} />
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/profile" element={<Profile />} />
          <Route path="/funtopia/*" element={<FuntopiaRoute />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
