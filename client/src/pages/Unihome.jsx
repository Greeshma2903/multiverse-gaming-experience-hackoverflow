import React from "react";
import Navbar from "../components/UniHome/Navbar";
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
