
// SearchBar.js
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      // Pass the price range along with the search query
      onSearch(searchText, minPrice, maxPrice);
    }
  };

  return (
    <div className="search_button">
      <h4>What are you looking for?</h4>
      <form className="a" onSubmit={handleSearch}>
        <input
          type="search"
          className="form-control"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="price-range">
          <label>
            Min Price: 
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="Min"
            />
          </label>
          <label>
            Max Price: 
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="Max"
            />
          </label>
          <div className="b">
          <button type="submit">Search</button>
          </div>
        </div>
  
      </form>
    </div>
  );
};

export default SearchBar;
