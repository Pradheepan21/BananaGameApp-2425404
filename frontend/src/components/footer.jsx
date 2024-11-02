// File: footer.jsx

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { GiBananaBunch } from 'react-icons/gi';

const Footer = () => {
  return (
    <footer className="bg-yellow-400 text-yellow-900 py-4 w-full shadow-inner">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-4">
        {/* Logo and Tagline */}
        <div className="flex items-center space-x-2">
          <GiBananaBunch className="text-3xl text-yellow-700" />
          <h2 className="text-2xl font-bold">Banana Game Challenge</h2>
        </div>
        <p className="text-center font-medium">
          Join the banana madness! 🍌 Collect, dodge, and climb the leaderboard!
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-yellow-700 hover:text-yellow-600 transition duration-300">
            <FaFacebook className="text-2xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-yellow-700 hover:text-yellow-600 transition duration-300">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-yellow-700 hover:text-yellow-600 transition duration-300">
            <FaInstagram className="text-2xl" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-700">&copy; 2024 Banana Game Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
