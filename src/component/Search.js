import React from "react";

// css
import "../style/style.css";

const Search = ({ query, setQuery }) => {
  return (
    <div className="search-container">
      <h1>Find your Favorite Product</h1>
      <div className="input-field">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
