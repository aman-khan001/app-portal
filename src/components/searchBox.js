"use client";
import React, { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const handleSearch = async () => {};
  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;