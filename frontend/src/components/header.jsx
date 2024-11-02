// File: header.jsx

import React from 'react';
import { GiBananaBunch } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-yellow-400 text-yellow-900 shadow-lg w-full">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center">
          <GiBananaBunch className="text-4xl text-yellow-700 mr-2" />
          <h1 className="text-3xl font-bold">Banana Game Challenge</h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <Link to="/" className="text-lg font-semibold hover:text-yellow-700 transition duration-300">Home</Link>
          <Link to="/game" className="text-lg font-semibold hover:text-yellow-700 transition duration-300">Game</Link>
          <Link to="/login" className="text-lg font-semibold hover:text-yellow-700 transition duration-300">Login</Link>
          <Link to="/signup" className="text-lg font-semibold hover:text-yellow-700 transition duration-300">Sign Up</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
