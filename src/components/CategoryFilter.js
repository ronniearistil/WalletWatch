// src/CategoryFilter.js
import React from 'react';

const CategoryFilter = ({ categories, setFilteredCategory }) => {
  return (
    <div>
      <label>Filter by Category:</label>
      <select onChange={(e) => setFilteredCategory(e.target.value)}>
        <option value="All">All</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;

