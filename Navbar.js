// src/components/Navbar.js

import React from 'react';
import '../styles/Navbar.css'; // Ensure to style your navbar

const Navbar = ({ setCurrentPage }) => {
  return (
    <nav className="navbar">
      <h1>Grocery Shop</h1>
      <ul>
        <li onClick={() => setCurrentPage('home')}>Home</li>
        <li onClick={() => setCurrentPage('productList')}>Products</li>
        <li onClick={() => setCurrentPage('cart')}>Cart</li>
        <li onClick={() => setCurrentPage('orderHistory')}>Order History</li>
        <li onClick={() => setCurrentPage('adminDashboard')}>Admin</li>
        <li onClick={() => setCurrentPage('login')}>Login</li>
        <li onClick={() => setCurrentPage('signup')}>Sign Up</li>
      </ul>
    </nav>
  );
};

export default Navbar;
