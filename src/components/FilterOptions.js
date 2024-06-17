import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setArticles } from "../store/actions";

const FilterOptions = ({ data }) => {
  const [filterType, setFilterType] = useState("");
  const [date, setDate] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const dispatch = useDispatch();

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const onFilterChange = (e) => {
    setFilterType(e.target.value);
    resetFilters();
  };

  const resetFilters = () => {
    setDate("");
    setSource("");
    setCategory("");
  };

  const handleFilter = () => {
    let filteredArticles = [...data];

    if (filterType === "date") {
      filteredArticles = filterByDate(filteredArticles);
    } else if (filterType === "source") {
      filteredArticles = filterBySource(filteredArticles);
    } else if (filterType === "category") {
      filteredArticles = filterByCategory(filteredArticles);
    }

    setFilteredData(filteredArticles);
    dispatch(setArticles(filteredArticles));
  };

  const filterByDate = (articles) => {
    return articles.filter((article) => {
      const articleDate = formatDate(
        article.webPublicationDate || article.publishedAt || article.pub_date
      );
      return articleDate === date;
    });
  };

  const filterBySource = (articles) => {
    return articles.filter((article) => {
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
  };

  const filterByCategory = (articles) => {
    return articles.filter((article) => {
      const articleCategory =
        (typeof article.sectionName === "string" &&
          article.sectionName.toLowerCase()) ||
        (typeof article.news_desk === "string" &&
          article.news_desk.toLowerCase());
      return articleCategory === category.toLowerCase();
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row md:items-center mb-4">
        <select
          onChange={onFilterChange}
          className="border border-gray-400 p-2 rounded-lg mb-2 md:mb-0 md:mr-2"
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
            className="p-2 rounded-md mb-2 md:mb-0 md:mr-2"
          />
        )}
        {filterType === "category" && (
          <input
            type="text"
            placeholder="Search For Category e.g., NEWS"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 rounded-md mb-2 md:mb-0 md:mr-2"
          />
        )}
        {filterType === "source" && (
          <input
            type="text"
            placeholder="Search For Source e.g., BBC"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="p-2 rounded-md mb-2 md:mb-0 md:mr-2"
          />
        )}

        {filterType && (
          <button
            className="p-2 rounded-md bg-blue-500 text-white"
            onClick={handleFilter}
          >
            Filter Data
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterOptions;
