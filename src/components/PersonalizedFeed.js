import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { setArticles } from "../store/actions";
import { fetchGuardianArticles } from "../services/guardianAPIService";
import { fetchNewsArticles } from "../services/newsAPIService";
import { fetchNYTArticles } from "../services/nytAPIService";
import { sourcesData, categoriesData, authorsData } from "../utils/constants";
import Loader from './Loader';

const PersonalizedFeed = () => {
  const [sources, setSources] = useState([]);
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [selectedSources, setSelectedSources] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [articles, setArticlesState] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const formatOptions = (data) =>
    data.map((item) => ({ value: item, label: item }));

  useEffect(() => {
    const storedArticles = sessionStorage.getItem('articles');
    if (storedArticles) {
      dispatch(setArticles(JSON.parse(storedArticles)));
    }

    setSources(formatOptions(sourcesData));
    setCategories(formatOptions(categoriesData));
    setAuthors(formatOptions(authorsData));
  }, [dispatch]);

  const handleSelectionChange = async (
    selectedOptions,
    setSelectedOptions,
    type
  ) => {
    setSelectedOptions(selectedOptions);

    const newOptions = selectedOptions.map((option) => option.value);
    const query = new URLSearchParams();

    if (type === "sources") {
      newOptions.forEach((option) => query.append("source", option));
    } else if (type === "categories") {
      newOptions.forEach((option) => query.append("category", option));
    } else if (type === "authors") {
      newOptions.forEach((option) => query.append("author", option));
    }

    await handleSearch(query.toString());
  };

  const handleSearch = async (query) => {
    setLoading(true);
    try{
      const newsAPIArticles = await fetchNewsArticles(query);
      const guardianArticles = await fetchGuardianArticles(query);
      const nytArticles = await fetchNYTArticles(query);
  
      const newArticles = [
        ...newsAPIArticles,
        ...guardianArticles,
        ...nytArticles,
      ];
  
      setArticlesState((prevArticles) => {
        const combinedArticles = [...prevArticles, ...newArticles];
        const uniqueArticles = combinedArticles.filter(
          (article, index, self) =>
            index === self.findIndex((a) => a.url === article.url)
        );
        return uniqueArticles;
      });
  
      const combinedArticles = [...articles, ...newArticles];
  
      sessionStorage.setItem("articles", JSON.stringify(combinedArticles));
      const storedArticles = JSON.parse(sessionStorage.getItem("articles"));
  
      if (storedArticles) {
        dispatch(setArticles(storedArticles));
      }
    }catch(error){
      console.log("Error Fetching Articles: ", error)
    }finally{
      setLoading(false)
    }
   
  };

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row md:items-center mb-4 space-y-4 md:space-y-0 md:space-x-4">
        <div className="w-full md:w-1/3">
          <Select
            isMulti
            options={sources}
            value={selectedSources}
            onChange={(selectedOptions) =>
              handleSelectionChange(
                selectedOptions,
                setSelectedSources,
                "sources"
              )
            }
            placeholder="Select Sources"
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>
        <div className="w-full md:w-1/3">
          <Select
            isMulti
            options={categories}
            value={selectedCategories}
            onChange={(selectedOptions) =>
              handleSelectionChange(
                selectedOptions,
                setSelectedCategories,
                "categories"
              )
            }
            placeholder="Select Categories"
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>
        <div className="w-full md:w-1/3">
          <Select
            isMulti
            options={authors}
            value={selectedAuthors}
            onChange={(selectedOptions) =>
              handleSelectionChange(
                selectedOptions,
                setSelectedAuthors,
                "authors"
              )
            }
            placeholder="Select Authors"
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>
      </div>
      {articles.length > 0 ? (
        <div>
          <h2 className="text-xl font-bold mb-4">Articles</h2>
        </div>
      ) : (<Loader />)}
    </div>
  );
};

export default PersonalizedFeed;
