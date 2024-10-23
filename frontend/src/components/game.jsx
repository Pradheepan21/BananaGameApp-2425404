import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Game = () => {
  const [questionImage, setQuestionImage] = useState('');
  const [solution, setSolution] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Game Question</h1>
      <img src={questionImage} alt="Game Question" />
      <p>Solution: {solution}</p>
    </div>
  );
};

export default Game;
