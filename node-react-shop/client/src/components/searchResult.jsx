// SearchResults.js
import React from "react";
import { Link } from "react-router-dom";

const SearchResults = ({ searchResults }) => {
  return (
    <div className="search-results-page">
      <h2>Search Results</h2>
      {searchResults.length > 0 ? (
        <ul className="product-list">
          {searchResults.map((products, index) => (
            <li key={index} className="product-item">
              <img src={products.image} alt={products.name} className="product-image" />
              <div className="product-details">
                <h5 className="product-name">{products.name}</h5>
                <p className="product-description">{products.description}</p>
                <p className="product-price">
                  <strong>Price:</strong> ${products.price}{" "}
                  <span className="discount-price">
                    (Discount: ${products.discount_price})
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          No results found. <Link to="/">Go back to Home</Link>
        </p>
      )}
    </div>
  );
};

export default SearchResults;
