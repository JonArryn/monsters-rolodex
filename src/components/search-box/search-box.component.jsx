import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    // onChange event sets state object searchField to the event target value
    onChange={handleChange}
  />
);
