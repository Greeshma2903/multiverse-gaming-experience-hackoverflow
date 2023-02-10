import React, { useState } from "react";
import "./QuizGame.css";

function QuizGame() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  
  const questions = [
    {
      text: "What type of scientist is Jane Foster in Thor?",
      options: [
        { id: 0, text: "Biologist", isCorrect: false },
        { id: 1, text: "Chemist", isCorrect: false },
        { id: 2, text: "Biologist", isCorrect: false },
        { id: 3, text: "Astronomer", isCorrect: true },
      ],
    },
    {
      text: "Who is the villain in Guardians of the Galaxy: Vol 1?",
      options: [
        { id: 0, text: "Ronan The Accuser", isCorrect: true },
        { id: 1, text: "Obidiah Stane", isCorrect: false },
        { id: 2, text: "Thanos", isCorrect: false },
        { id: 3, text: "Yondu Udonta", isCorrect: false },
      ],
    },
    {
      text: "What type of vehicle did Thanos briefly use in the comic books and make a brief appearance in the Loki series?",
      options: [
        { id: 0, text: "A helicopter with “Thanos” written on the side", isCorrect: true },
        { id: 1, text: "A motorbike with “Titan” on the side", isCorrect: false },
        { id: 2, text: "A car with “perfectly balanced” on the side", isCorrect: false },
        { id: 3, text: "A tank with “Infinity” written on it", isCorrect: false },
      ],
    },
    {
      text: "What is the name of Peter Quill’s home planet?",
      options: [
        { id: 0, text: "Pandora", isCorrect: false },
        { id: 1, text: "Earth", isCorrect: true },
        { id: 2, text: "Titan", isCorrect: false },
        { id: 3, text: "Morag", isCorrect: false },
      ],
    },
    {
      text: "Which of the following characters did not disappear during the ”blip”?",
      options: [
        { id: 0, text: "Spiderman", isCorrect: false },
        { id: 1, text: "Rocket", isCorrect: true },
        { id: 2, text: "Doctor Strange", isCorrect: false },
        { id: 3, text: "Black Panther", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <section className="Quiz min-h-screen flex flex-col justify-start items-center gap-16 py-20 bg-gradient-to-r from-indigo-500 to-pink-700">
      {/* 1. Header  */}
      <h1 className="font-game-head text-3xl mb-2 text-white">Into the Marvel Multiverse!</h1>

      {/* 2. Current Score  */}
      <h2 className="bg-peach py-2 px-3 rounded">Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results text-center space-y-6 p-5">
          <h2 className="text-2xl font-bold">Final Results</h2>
          <h3 className="text-3xl font-semibold">
            {score} / {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h3>
          <button onClick={() => restartGame()} className="p-2 bg-peach rounded text-black hover:bg-brick">Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text text-customPurple font-bold text-xl m-3">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
}

export default QuizGame;