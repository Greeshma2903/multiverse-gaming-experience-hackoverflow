import { Link } from "react-router-dom";

const data = [
  {
    to: "tictactoe",
    id: "g1",
    game: "tic tac toe",
    desc: "The Classic Game, why would anyone miss out on this in any universe?",
  },
  {
    to: "quizzards",
    id: "g2",
    game: "quizzards",
    desc: "Let's test your knowledge on the multiverse world! Inspired from sick movies made on planet Earth 🌍",
  },
  {
    to: "memorygame",
    id: "g3",
    game: "memory game",
    desc: "How well do you know the Multiverse? Let's test your mind with some fun fandom images.",
  },
  {
    id: "g4",
    game: "More games coming...",
    desc: "Eager for more? We too! Just give us a while...",
  },
];

const Funtopia = () => {
  return (
    <section className="text-gray-600 body-font bg-gradient-to-r from-indigo-500 via-purple-800 to-pink-900">
      <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
          <h1 className="sm:text-6xl text-2xl font-head mb-2 text-white">
            Funtopia
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-200">
            Let the Games begin 🔥
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {data.map((item) => (
            <div key={item.id} className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-6 rounded-lg shadow-md bg-purple-100 bg-opacity-40 backdrop-blur-md drop-shadow-sm">
                <h2 className="text-4xl text-white font-game mb-2">
                  {item.game}
                </h2>
                <p className="leading-relaxed text-sm text-gray-200">{item.desc}</p>
                <Link className="flex gap-2 mt-4 text-blue-700 hover:underline hover:underline-offset-4" to={item.to}>
                  play now
                  <scan>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-arrow-wave-right-up"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M17 10h4v4"></path>
                      <path d="M3 12c.887 -1.284 2.48 -2.033 4 -2c1.52 -.033 3.113 .716 4 2s2.48 2.033 4 2c1.52 .033 3 -1 4 -2l2 -2"></path>
                    </svg>
                  </scan>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Funtopia;
