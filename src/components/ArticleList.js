import React from "react";
import { useSelector } from "react-redux";
import ArticleCard from "./ArticleCard";

const ArticleList = () => {
  const articles = useSelector((state) => state.articles);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {articles && articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
