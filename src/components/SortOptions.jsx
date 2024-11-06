import React from "react";

const SortOptions = ({ setFilteredProducts, products }) => {
  const handleSortChange = (e) => {
    const sortBy = e.target.value;

    let sortedProducts = [...products];
    if (sortBy === "priceLowHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === "priceHighLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(sortedProducts);
  };

  return (
    <div className="sort-options">
      <span>Showing {products.length} products</span>
      <div className="sort-dropdown">
        <label>Sort by:</label>
        <select onChange={handleSortChange}>
          <option value="default">Most Popular</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default SortOptions;
