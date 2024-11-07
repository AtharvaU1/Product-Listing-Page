import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Filters from "./components/Filters";
import SortOptions from "./components/SortOptions";
import "./styles.css";

const defaultFilters = {
  category: "",
  brand: "",
  availability: "",
  sortBy: "",
  price: [0, 0]
};

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState(defaultFilters);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setFilteredProducts(data.products);
        setBrands(
          data.products.map((product) => product.brand).filter((brand) => brand)
        );
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleFilterChange = (updatedFilters) => {
    setFilters(updatedFilters);

    const filtered = products
      .filter(
        (product) =>
          product.category === updatedFilters.category ||
          updatedFilters.category === ""
      )
      .filter(
        (product) =>
          product.price <= updatedFilters.price[1] ||
          updatedFilters.price[1] === 0
      )
      .filter(
        (product) =>
          product.brand === updatedFilters.brand || updatedFilters.brand === ""
      );

    let sortedProducts = [...filtered];
    if (updatedFilters.sortBy === "priceLowHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (updatedFilters.sortBy === "priceHighLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (updatedFilters.sortBy === "mostPopular") {
      sortedProducts.sort((a, b) => b.rating - a.rating);
    }
    setFilteredProducts(sortedProducts);
  };

  return (
    <div className="product-listing">
      <Filters
        filters={filters}
        setFilters={setFilters}
        products={products}
        setFilteredProducts={setFilteredProducts}
        brands={brands}
        handleFilterChange={handleFilterChange}
      />
      <div className="main-content">
        <SortOptions
          setFilteredProducts={setFilteredProducts}
          products={filteredProducts}
          handleFilterChange={handleFilterChange}
          filters={filters}
        />
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
};

export default App;
