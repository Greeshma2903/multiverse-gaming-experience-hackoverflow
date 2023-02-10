import "./unihome.css";
import earth from "../../assets/decor/earth.png";
const HomeContent = () => {
  return (
    <>
      <div
        id="universe"
        className="h-screen flex justify-around items-start bg-black"
      >
        <h2 className="font-head text-center text-white text-4xl md:text-7xl pt-40">
          Welcome to our <br /> Universe
        </h2>
      </div>
      <section className="bg-black px-20 py-10">
        <h2 className="text-gray-400 text-center font-game text-5xl my-10 animate-pulse">you are here...</h2>
        <div className="flex flex-wrap justify-center items-center gap-10">
          <div className="basis-[40%]">
            <h2 className="text-white font-head text-5xl my-10">
              Planet earth
            </h2>
            <img src={earth} className="w-2/3 animate-[spin_9s_linear_infinite]" alt="" />
          </div>
          <div className="basis-[40%] bg-white p-10 rounded backdrop-blur-sm bg-opacity-10">
            <p className="text-white">
              Earth is the third planet from the sun and the only known planet
              to support life. It is a terrestrial planet with a solid surface,
              composed of rock and metal, with a thin atmosphere and strong
              magnetic field. <br /> <br/>
              Earth has a diameter of approximately 12,742 kilometers and is the
              fifth densest planet in our solar system. It has a diverse
              climate, ranging from the frozen poles to the tropical equator,
              and is home to a wide variety of plant and animal species, many of
              which are found nowhere else in the universe.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeContent;
