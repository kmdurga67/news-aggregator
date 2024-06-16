import React from 'react';
import SearchBar from '../components/SearchBar';
import ArticleList from '../components/ArticleList';
// import PersonalizedFeed from '../components/PersonalizedFeed';

const HomePage = () => {
  return (
    <div>
      <SearchBar />
      {/* <PersonalizedFeed /> */}
      <ArticleList />
    </div>
  );
};

export default HomePage;
