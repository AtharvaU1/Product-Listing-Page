import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Filters from "./components/Filters";
import SortOptions from "./components/SortOptions";
import "./styles.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    brand: "",
    priceRange: [0, 1000],
    availability: "",
  });

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setFilteredProducts(data.products);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="product-listing">
      <Filters
        filters={filters}
        setFilters={setFilters}
        products={products}
        setFilteredProducts={setFilteredProducts}
      />
      <div className="main-content">
        <SortOptions
          setFilteredProducts={setFilteredProducts}
          products={filteredProducts}
        />
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
};

export default App;
