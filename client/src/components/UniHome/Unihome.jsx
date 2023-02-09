import React from "react";
import HomeContent from "./HomeContext";
import Navbar from "./Navbar";
import ProfileBar from "./ProfileBar";
import { Outlet } from "react-router-dom";

const Unihome = () => {
  return (
    <main
      className="min-h-screen h-full relative"
    >
      <Navbar />
      <Outlet/>
    </main>
  );
};

export default Unihome;
