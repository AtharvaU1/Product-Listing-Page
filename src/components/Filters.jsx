import React from "react";

const Filters = ({ filters, setFilters, products, setFilteredProducts }) => {
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setFilters((prev) => ({ ...prev, category: selectedCategory }));

    const filtered = products.filter(
      (product) =>
        product.category === selectedCategory || selectedCategory === ""
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="filters">
      <h3>Categories</h3>
      <label>
        <input
          type="radio"
          value=""
          checked={filters.category === ""}
          onChange={handleCategoryChange}
        />
        All
      </label>
      <label>
        <input
          type="radio"
          value="beauty"
          checked={filters.category === "beauty"}
          onChange={handleCategoryChange}
        />
        Beauty
      </label>
      <label>
        <input
          type="radio"
          value="fragrances"
          checked={filters.category === "fragrances"}
          onChange={handleCategoryChange}
        />
        Fragrances
      </label>
      <label>
        <input
          type="radio"
          value="furniture"
          checked={filters.category === "furniture"}
          onChange={handleCategoryChange}
        />
        Furniture
      </label>
      <label>
        <input
          type="radio"
          value="groceries"
          checked={filters.category === "groceries"}
          onChange={handleCategoryChange}
        />
        Groceries
      </label>
    </div>
  );
};

export default Filters;
