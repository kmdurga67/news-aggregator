import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPreferences } from '../store/actions';

const PersonalizedFeed = () => {
  const preferences = useSelector((state) => state.preferences);
  const dispatch = useDispatch();
  const [sources, setSources] = useState(preferences.sources);
  const [categories, setCategories] = useState(preferences.categories);
  const [date, setDate] = useState(preferences.date);

  const handleSavePreferences = () => {
    dispatch(setPreferences({ sources, categories, date }));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Customize Your Feed</h2>
      <div className="mb-4">
        <label className="block mb-2">Sources</label>
        <input
          type="text"
          value={sources}
          onChange={(e) => setSources(e.target.value.split(','))}
          className="border border-gray-400 p-2 rounded-lg w-full"
          placeholder="Enter sources separated by commas"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Categories</label>
        <input
          type="text"
          value={categories}
          onChange={(e) => setCategories(e.target.value.split(','))}
          className="border border-gray-400 p-2 rounded-lg w-full"
          placeholder="Enter categories separated by commas"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value.split(','))}
          className="border border-gray-400 p-2 rounded-lg w-full"
          placeholder="Enter authors separated by commas"
        />
      </div>
      <button
        onClick={handleSavePreferences}
        className="p-2 bg-blue-500 text-white rounded-lg"
      >
        Save Preferences
      </button>
    </div>
  );
};

export default PersonalizedFeed;
