import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setArticles } from "../store/actions";

const FilterOptions = ({data}) => {
  const [filterType, setFilterType] = useState("");
  const [date, setDate] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  const onFilterChange = (e) => {
    setFilterType(e.target.value);
    setDate("");
    setSource("");
    setCategory("");
  };

  const handleClick = async () => {

    let filteredArticles = [];

    if (filterType === "date") {
      filteredArticles = data.filter((article) => {
        const articleDate = formatDate(
          article.webPublicationDate || article.publishedAt || article.pub_date
        );
        return articleDate === date;
      });
    } else if (filterType === "source") {
      filteredArticles = data.filter((article) => {
        const articleSource =
          typeof article.source === "string"
            ? article.source.toLowerCase()
            : article.source &&
              typeof article.source === "object" &&
              article.source.name
            ? article.source.name.toLowerCase()
            : "";
        return articleSource === source.toLowerCase();
      });
    }else if (filterType === "category") {
      filteredArticles = data.filter((article) => {
        const articleCategory = (typeof article.sectionName === "string" && article.sectionName.toLowerCase()) || (typeof article.news_desk === "string" && article.news_desk.toLowerCase())
        return articleCategory === category;
      });
    }

    dispatch(setArticles(filteredArticles));
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  return (
    <div className="p-4">
      <select
        onChange={onFilterChange}
        className="border border-gray-400 p-2 rounded-lg"
        value={filterType}
      >
        <option value="">Select Filter</option>
        <option value="date">Date</option>
        <option value="category">Category</option>
        <option value="source">Source</option>
      </select>

      {filterType === "date" && (
        <input
          type="date"
          placeholder="Select Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 ml-2 rounded-md"
        />
      )}
      {filterType === "category" && (
        <input
          type="text"
          placeholder="Search For Category e.g., Politics"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 ml-2 rounded-md border"
        />
      )}
      {filterType === "source" && (
        <input
          type="text"
          placeholder="Search For Source e.g., BBC"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className="p-2 ml-2 rounded-md border"
        />
      )}

      {filterType && (
        <button
          className="p-2 ml-2 rounded-md bg-blue-500 text-white"
          onClick={handleClick}
        >
          Filter Data
        </button>
      )}
    </div>
  );
};

export default FilterOptions;