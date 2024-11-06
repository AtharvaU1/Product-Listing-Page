import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <div className="product-info">
        <h4>{product.title}</h4>
        <p>{product.category}</p>
        <p>${product.price}</p> {/* Displaying price */}
      </div>
    </div>
  );
};
export default ProductCard;
