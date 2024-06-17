import React from "react";
import ArticleList from "../components/ArticleList";
import PersonalizedFeed from "../components/PersonalizedFeed";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Link to="/search">
        <div className="flex items-center justify-center p-4 cursor-pointer">
          <input
            type="text"
            readOnly
            className="border border-gray-400 p-2 rounded-lg w-2/3"
            placeholder="Search for articles..."
          />
        </div>
      </Link>
      <PersonalizedFeed />
      <ArticleList />
    </div>
  );
};

export default HomePage;
