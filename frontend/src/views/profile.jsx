import React, { useState, useEffect } from 'react';
import { FaMedal, FaStar, FaGamepad } from 'react-icons/fa';
import axios from 'axios';

const Profile = () => {
  const [username, setUsername] = useState('');
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3000/game/get_player_username', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => {
        setUsername(response.data.username);
      })
      .catch(error => console.error('Error fetching username:', error));

    axios.get('http://localhost:3000/game/get_player_toatlscore', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => {
        setTotalScore(response.data.totalScore);
      })
      .catch(error => console.error('Error fetching total score:', error));
  }, []);

  return (
    <div className="min-h-screen bg-yellow-100 flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 border-2 border-yellow-400">
       
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
          
            <FaGamepad className="text-4xl text-yellow-500" />
          </div>
          <h1 className="text-3xl font-bold text-yellow-900">Player Profile</h1>
          <p className="text-yellow-700 mt-1">The Ultimate Banana Challenger 🍌</p>
        </div>

        
        <div className="space-y-6 text-yellow-900">
          <div className="flex items-center justify-between border-b border-yellow-300 pb-2">
            <span className="font-semibold text-lg">Username:</span>
            <span className="text-lg">{username}</span>
          </div>
          <div className="flex items-center justify-between border-b border-yellow-300 pb-2">
            <span className="font-semibold text-lg">Total Score:</span>
            <span className="text-lg">{totalScore} Points</span>
          </div>
        </div>

        
        <div className="text-center mt-8">
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white text-lg font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md">
            View Leaderboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;