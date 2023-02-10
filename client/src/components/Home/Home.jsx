import React from "react";
import "./Home.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import planet1 from '../../assets/decor/planet1.png'
import planet2 from '../../assets/decor/planet2.svg'

const Home = () => {
  return (
      <section id="header" className="water min-h-screen h-full px-[10%] bg-black relative flex items-center justify-center overflow-hidden">
        <img className="absolute -right-0 -top-4 z-10 ball_bounce" src={planet2} alt="" />
        <div className="container-fluid nav_bg h-full flex flex-col justify-center items-center space-y-9 z-30 relative my-5 md:my-0">
            <h1 className="home_heading font-head text-3xl md:text-7xl text-white">cosmic crusaders</h1>
            <p className="text-gray-300">
              {" "}
              “A long time ago in a galaxy far, far away....” we all grew up
              listening to these famous lines from the star war franchise.
              Turning our childhood fantasies into reality, we can now we dive
              into one universe to the other, know about each universe, live a
              different life in each or maybe ne dead in one and alive in some
              other. The multiverse is master of it all...
            </p>

            <p className="text-gray-300">
              Each universe provides you with its map, where specifies objects
              present to you with facts and characteristics of that planet. The
              more you learn the more you like it, moreover to keep you
              entertained there are a series of games!
            </p>

            <p className="text-gray-300">
              How you desire to look in each universe is customized, no one
              questions your opinion here. You decide to live in the one that
              suits you the best......{" "}
            </p>

            <button type="button" className="bg-peach px-8 py-2 border-3 border-dashed border-brick">Login</button>
        </div>
        <img className="absolute -bottom-10 -left-8 z-10 animate-bounce-slow ball_bounce" src={planet1} alt="" />
      </section>
  );
};

export default Home;
