import "./unihome.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mx-10 fixed z-50 top-10">
      <label
        className="p-3 bg-purple-300 bg-opacity-20 backdrop-blur-sm rounded drop-shadow-sm"
        htmlFor="my-modal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-menu-2"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="#fff"
          fill="none"
          strokeLinecap="round"
          strokeL
          inejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 6l16 0"></path>
          <path d="M4 12l16 0"></path>
          <path d="M4 18l16 0"></path>
        </svg>
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal z-50">
        <div className="modal-box bg-purple-800 bg-opacity-30 backdrop-blur-md rounded drop-shadow-sm text-white p-4 h-3/4 w-3/4">
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn text-white">
              ✕
            </label>
          </div>
          <div className="text-center space-y-3">
            <h3 className="font-game text-8xl">explore</h3>
            <h5 className="font-game text-5xl ">
              <Link to="/universe" className="hover:text-peach cursor-pointer">
                universe
              </Link>
            </h5>
            <h5 className="font-game text-5xl">
              <Link className="hover:text-peach cursor-pointer">funtopia</Link>
            </h5>
            <h3 className="font-game text-8xl">
              <Link to="/profile" className="hover:text-peach cursor-pointer">
                profile
              </Link>
            </h3>
            <h5 className="font-game text-8xl">
              <Link to="/" className="hover:text-peach cursor-pointer">
                logout
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
