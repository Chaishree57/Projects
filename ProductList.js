// src/pages/ProductList.js
import React from 'react';
import productsData from '../data/productData';
import ProductCard from '../components/ProductCard';
import '../styles/ProductList.css';
import { useCart } from '../context/CartContext'; // Import the context

const ProductList = ({ setCurrentPage }) => {
  const { addToCart } = useCart(); // Get addToCart from context

  const handleAddToCart = (product) => {
    addToCart(product); // Add product to cart
    setCurrentPage('cart'); // Navigate to cart page
  };

  return (
    <div className="product-list">
      <h2>All Products</h2>
      <div className="product-grid">
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={() => handleAddToCart(product)} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
