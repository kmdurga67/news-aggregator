import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center text-white">
          <Link to="/" className="text-2xl font-bold">
            News Aggregator Application
          </Link>
        </div>
        <nav className="flex items-center space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/search" className="text-white hover:text-gray-300">
            Search
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
