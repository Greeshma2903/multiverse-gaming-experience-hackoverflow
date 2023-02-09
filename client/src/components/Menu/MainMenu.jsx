import React, { useState } from "react";
import "./MainMenu.css";
import Menu from "./MenuSub/Menu";
function MainMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="MainMenu">
    <h1>Cosmic Crusaders</h1>
      <span className="material-icons menu-btn" onClick={() => setIsOpen(true)}>
        menu
      </span>
      <Menu isOpen={isOpen} onChange={setIsOpen}></Menu>
    </div>
  );
}

export default MainMenu;