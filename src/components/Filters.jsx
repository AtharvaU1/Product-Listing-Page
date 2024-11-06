import React from "react";
import { useState } from "react";

const Filters = ({
  filters,
  setFilters,
  products,
  setFilteredProducts,
  brands,
}) => {
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setFilters((prev) => ({ ...prev, category: selectedCategory }));

    const filtered = products.filter(
      (product) =>
        product.category === selectedCategory || selectedCategory === ""
    );
    setFilteredProducts(filtered);
  };

  const handleMaxPriceChange = (e) => {
    const maxPrice = Number(e.target.value);
    setFilters((prev) => ({ ...prev, price: [0, maxPrice] }));

    const filtered = products.filter((product) => product.price >= maxPrice);
    setFilteredProducts(filtered);
  };

  const handleBrandChange = (e) => {
    const selectedBrand = e.target.value;
    setFilters((prev) => ({ ...prev, brand: selectedBrand }));

    const filtered = products.filter(
      (product) => product.brand === selectedBrand || selectedBrand === ""
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
      <h3>Price range $0 - $2500</h3>
      <input
        type={"range"}
        min={0}
        max={2500}
        onChange={handleMaxPriceChange}
      ></input>
      {brands && brands.length > 0 ? (
        <>
          <h3>Brands</h3>
          <label>
            <input
              type="radio"
              value={""}
              checked={filters.brand === ""}
              onChange={handleBrandChange}
              key={"defaultBrand"}
            />
            Any Brand
          </label>
          {brands.map((brand) => {
            return (
              <label>
                <input
                  type="radio"
                  value={brand}
                  checked={filters.brand === brand}
                  onChange={handleBrandChange}
                  key={brand}
                />
                {brand}
              </label>
            );
          })}
        </>
      ) : null}
    </div>
  );
};

export default Filters;
