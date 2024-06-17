import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setArticles } from "../store/actions";
import { fetchGuardianArticles } from "../services/guardianAPIService";
import { fetchNewsArticles } from "../services/newsAPIService";
import { fetchNYTArticles } from "../services/nytAPIService";
import FilterOptions from "./FilterOptions";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const [datatoFilter, setDatatoFilter] = useState([]);

  const handleSearch = async () => {
    const newsAPIArticles = await fetchNewsArticles(query);
    const guardianArticles = await fetchGuardianArticles(query);
    const nytArticles = await fetchNYTArticles(query);
    const allArticles = [
      ...newsAPIArticles,
      ...guardianArticles,
      ...nytArticles,
    ];

    setDatatoFilter(allArticles);
    dispatch(setArticles(allArticles));
  };

  return (
    <>
      <div className="flex items-center justify-center p-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-400 p-2 rounded-lg w-2/3"
          placeholder="Search for articles..."
        />
        <button
          onClick={handleSearch}
          className="ml-4 p-2 bg-blue-500 text-white rounded-lg"
        >
          Search
        </button>
      </div>
      <div className="flex justify-stretch">
        <FilterOptions data={datatoFilter} />
      </div>
    </>
  );
};

export default SearchBar;
