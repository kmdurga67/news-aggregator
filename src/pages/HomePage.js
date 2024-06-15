import React from 'react';
import SearchBar from '../components/SearchBar';
import ArticleList from '../components/ArticleList';
import FilterOptions from '../components/FilterOptions';
// import PersonalizedFeed from '../components/PersonalizedFeed';

const HomePage = () => {
  return (
    <div>
      <SearchBar />
      <FilterOptions />
      {/* <PersonalizedFeed /> */}
      <ArticleList />
    </div>
  );
};

export default HomePage;
