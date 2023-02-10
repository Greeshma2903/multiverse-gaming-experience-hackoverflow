import "./Explore.css";
import data from "./data.json";
import VerticalCarousel from "./Carousel";
import { useEffect, useState } from "react";

const Explore = () => {
  const options = {
    // Search in `author` and in `tags` array
    keys: ["introline", "id"],
  };
  const [userSearch, setUserSearch] = useState("");
  const [dataResult, setResult] = useState(data.slides);
  console.log(dataResult);

  useEffect(() => {
    if (userSearch === "") return;
    const fuse = new Fuse(data.slides, options);
    const result = fuse.search(userSearch);
    setResult(
      result.map((ele) => {
        return ele.item;
      })
    );
  }, [userSearch]);

  console.log(dataResult);

  const handleSearch = (e) => {
    if (e.target.value.trim() !== "") {
      setUserSearch(e.target.value);
    } else {
      setResult(data.slides);
    }
  };

  return (
    <section
      id="explore"
      className="min-h-screen h-full bg-black flex flex-col py-8 items-center"
    >
      <h1 className="text-2xl md:text-5xl font-head text-gray-400 mt-8 mb-14">
        Select your Universe!
      </h1>
      <div className="mb-4">
        <input
          type="text"
          name="search"
          id="userSearch"
          placeholder="Search Universe..."
          onBlur={handleSearch}
          className="p-2 rounded"
        />
      </div>

      <div className="glow-on-hover h-[40rem] w-[20rem] md:h-[40rem] md:w-[40rem]">
        <VerticalCarousel data={dataResult} />
      </div>
    </section>
  );
};
export default Explore;
