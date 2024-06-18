import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setArticles } from "../store/actions";
import { fetchGuardianArticles } from "../services/guardianAPIService";
import { fetchNewsArticles } from "../services/newsAPIService";
import { fetchNYTArticles } from "../services/nytAPIService";
import FilterOptions from "./FilterOptions";
import ArticleList from "./ArticleList";
import Loader from "./Loader";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const [datatoFilter, setDatatoFilter] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
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
    } catch (error) {
      console.log("Error Fetching Search: ", error);
    } finally {
      setLoading(false);
    }
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
      {loading ? (
        <Loader />
      ) : (
        <div className="flex justify-stretch">
          <ArticleList />
        </div>
      )}
      {datatoFilter.length === 0 && (<div>
        <h1 className="text-center text-3xl text-red-500">No Data Found. Kindly Search to get results</h1>
      </div>)}
    </>
  );
};

export default SearchBar;
