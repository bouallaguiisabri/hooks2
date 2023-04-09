import React from 'react';

const Filter = ({ titleFilter, handleTitleFilterChange, ratingFilter, handleRatingFilterChange }) => {
  return (
    <div className="filters">
      <input type="text" placeholder="Filter by title" value={titleFilter} onChange={handleTitleFilterChange} />
      <input type="number" placeholder="Filter by rating" value={ratingFilter} onChange={handleRatingFilterChange} />
    </div>
  );
};

export default Filter;