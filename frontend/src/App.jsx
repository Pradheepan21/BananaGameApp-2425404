// File: App.tsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Game from "./components/Game";
import Home from "./views/Home";
import Header from "./components/header";
import Footer from "./components/footer";
import Login from "./views/login"; // Ensure filename is `login.jsx`
import Signup from "./views/signup"; // Ensure filename is `signup.jsx`

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-yellow-100">
        <Header />

        {/* Define Routes */}
        <div className="flex-grow flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
