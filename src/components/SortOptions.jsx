import React from "react";

const SortOptions = ({ handleFilterChange, products, filters }) => {
  const handleSortChange = (e) => {
    const sortBy = e.target.value;
    handleFilterChange({ ...filters, sortBy });
  };

  return (
    <div className="sort-options">
      <span>Showing {products.length} products</span>
      <div className="sort-dropdown">
        <label>Sort by:</label>
        <select onChange={handleSortChange}>
          <option value="default">Default</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
          <option value="mostPopular">Most Popular</option>
        </select>
      </div>
    </div>
  );
};

export default SortOptions;
