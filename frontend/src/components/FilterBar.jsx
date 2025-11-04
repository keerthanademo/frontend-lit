import React, { useState } from "react";
import "../styles/FilterBar.css";

const FilterBar = ({ onSelect }) => {
  const [active, setActive] = useState(null);

  const categories = [
    "Clothing",
    "Accessories",
    "Footwear",
    "Electronics",
    "Storage",
    "Fragrances",
  ];

  const handleClick = (category) => {
    setActive(category);
    if (onSelect) onSelect(category);
  };

  return (
    <div className="cfb-wrapper">
      <div className="cfb-container">
        {categories.map((category) => (
          <button
            key={category}
            className={`cfb-pill ${active === category ? "cfb-active" : ""}`}
            onClick={() => handleClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
