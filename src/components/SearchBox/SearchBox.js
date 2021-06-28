import React from 'react';
import './SearchBox.css';

const SearchBox = ({ onInputChange }) => {
  return (
    <div className="search-container">
      <input
        placeholder="Type keywords"
        className="search-input"
        onChange={(e) => onInputChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
