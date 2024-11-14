// src/pages/HomePage.js

import React from 'react';
import '../styles/HomePage.css';

const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="home-page">
      <div className="content">
        <h1>Welcome to Grocery Shop</h1>
        <p>Your one-stop shop for fresh groceries and essentials!</p>
        <button className="start-button" onClick={() => setCurrentPage('login')}>
          Start Shopping
        </button>
      </div>
    </div>
  );
};

export default HomePage;
