import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setArticles } from '../store/actions';
import { fetchNewsArticles } from '../services/newsAPIService';
import { fetchGuardianArticles } from '../services/guardianAPIService';
import { fetchNYTArticles } from '../services/nytAPIService';

const FilterOptions = ( ) => {
  const [data, setData] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  const onFilterChange = (e) => {
    setData(e.target.value);
  }

  const handleClick = async () => {
    const newsAPIArticles = await fetchNewsArticles(query);
    const guardianArticles = await fetchGuardianArticles(query);
    const nytArticles = await fetchNYTArticles(query);
    const allArticles = [...newsAPIArticles, ...guardianArticles, ...nytArticles];
    dispatch(setArticles(allArticles));
  }

  return (
    <div className="p-4">
      <select
        onChange={onFilterChange}
        className="border border-gray-400 p-2 rounded-lg"
        value={data}
      >
        <option value="">Select Category</option>
        <option value="date">Date</option>
        <option value="category">Category</option>
        <option value="source">Source</option>
      </select>

      {data === "date" && <input type='date' placeholder='Select Date' className='p-2 ml-2 rounded-md'/> }
      {data === "category" && <input type='text' placeholder='Search For Category e.g., NEWS'
      value={category} 
      onChange={(e) => setCategory(e.target.value)}
      className='p-2 ml-2 rounded-md'/> }

      {data === "source" && <input type='text' placeholder='Search For Source e.g., BBC, ' 
      value={source}
      onChange={(e) => setSource(e.target.value)}
      className='p-2 ml-2 rounded-md'/> }

      {data.length > 0 && <button className='p-2 ml-2 rounded-md bg-blue-500 text-white' onClick={handleClick}>Search</button>}
    </div>
  );
};

export default FilterOptions;
