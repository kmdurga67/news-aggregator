import React from 'react';

const FilterOptions = ({ onFilterChange }) => {
  return (
    <div className="p-4">
      <select
        onChange={(e) => onFilterChange(e.target.value)}
        className="border border-gray-400 p-2 rounded-lg"
      >
        <option value="">Select Category</option>
        <option value="date">Date</option>
        <option value="category">Category</option>
        <option value="source">Source</option>
      </select>
    </div>
  );
};

export default FilterOptions;
