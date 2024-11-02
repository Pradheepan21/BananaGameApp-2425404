import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Game = () => {
  const [questionImage, setQuestionImage] = useState('');
  const [solution, setSolution] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showSolution, setShowSolution] = useState(false); // New state to control solution visibility

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://marcconrad.com/uob/banana/api.php');
        setQuestionImage(response.data.question);
        setSolution(response.data.solution);
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleInput = (value) => {
    if (userInput.length < 2) { // limit to two digits for user input
      setUserInput(userInput + value);
    }
  };

  const checkAnswer = () => {
    if (userInput == solution) {
      toast.success('Correct! 🎉');
      setShowSolution(true); // Show solution if correct
    } else {
      toast.error('Oops! That answer is wrong. ❌');
      setShowSolution(false); // Hide solution if wrong
    }
  };

  const resetGame = () => {
    setUserInput('');
    setShowSolution(false); // Hide the solution when starting a new game
    // Fetch new question
    const fetchData = async () => {
      try {
        const response = await axios.get('https://marcconrad.com/uob/banana/api.php');
        setQuestionImage(response.data.question);
        setSolution(response.data.solution);
      } catch (err) {
        setError('Failed to fetch data');
      }
    };
    fetchData();
  };

  if (loading) {
    return <div className="text-bananaYellow text-2xl animate-pulse text-center mt-20">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-2xl text-center mt-20">{error}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-100 to-yellow-200 p-4">
      <h1 className="text-5xl md:text-7xl lg:text-8xl text-bananaYellow font-extrabold mb-8 drop-shadow-lg animate-bounce">
        Banana Maths Game
      </h1>

      <div className="bg-white shadow-2xl rounded-lg p-6 max-w-md w-full mx-auto transform transition duration-500 hover:scale-105">
        <img
          className="w-full h-64 object-cover rounded-lg mb-6 border-4 border-bananaYellow p-8 shadow-lg"
          src={questionImage}
          alt="Game Question"
        />
        <div className="bg-bananaYellow p-4 rounded-lg text-center mb-4">
          <p className="text-xl font-bold text-darkBrown">
            Solve the puzzle above!
          </p>
          <p className="text-lg mt-2 text-darkBrown">Solution: <span className="font-semibold">{solution}</span></p>
          <p className="text-lg mt-2 text-darkBrown">Your Answer: <span className="font-semibold">{userInput}</span></p>
          {showSolution && (
            <p className="text-lg mt-2 text-darkBrown">Solution: <span className="font-semibold">{solution}</span></p>
          )}
        </div>
        <div className="flex flex-wrap justify-center mb-4">
          {Array.from({ length: 10 }, (_, index) => (
            <button
              key={index}
              onClick={() => handleInput(index.toString())}
              className="m-1 px-4 py-2 bg-yellow-300 text-darkBrown rounded-lg shadow-md hover:bg-yellow-400 transition duration-300 transform hover:scale-105"
            >
              {index}
            </button>
          ))}
        </div>
        <div className="flex space-x-4">
          <button
            onClick={checkAnswer}
            className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300 transform hover:scale-105 font-semibold"
          >
            Submit Answer
          </button>
          <button
            onClick={resetGame}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105 font-semibold"
          >
            New Game
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Game;
