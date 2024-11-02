// File: signup.jsx

import React from 'react';
import { GiBananaBunch } from 'react-icons/gi';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md text-yellow-800">
        {/* Logo and Title */}
        <div className="text-center">
          <GiBananaBunch className="text-6xl text-yellow-500 mx-auto" />
          <h1 className="text-3xl font-bold text-yellow-600 mt-4">Banana Game Challenge</h1>
          <p className="mt-2 text-gray-600">Sign up and join the banana adventure!</p>
        </div>

        {/* Signup Form */}
        <form className="space-y-4">
          <div className="flex items-center border-2 border-yellow-400 rounded-lg px-3 py-2">
            <FaUser className="text-yellow-600 mr-2" />
            <input type="text" placeholder="Username" className="w-full p-2 outline-none bg-transparent" />
          </div>
          <div className="flex items-center border-2 border-yellow-400 rounded-lg px-3 py-2">
            <FaEnvelope className="text-yellow-600 mr-2" />
            <input type="email" placeholder="Email" className="w-full p-2 outline-none bg-transparent" />
          </div>
          <div className="flex items-center border-2 border-yellow-400 rounded-lg px-3 py-2">
            <FaLock className="text-yellow-600 mr-2" />
            <input type="password" placeholder="Password" className="w-full p-2 outline-none bg-transparent" />
          </div>

          <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded-lg transition duration-300">
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-yellow-600 font-semibold hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
