// src/components/ProductCard.js
import React from 'react';
import '../styles/ProductCard.css';
//import { useCart } from '../context/CartContext'; // Adjust the import based on your structure
const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <button className="add-to-cart" onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
