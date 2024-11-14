// src/App.js
import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
//import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import OrderHistory from './pages/OrderHistory';
import AdminDashboard from './pages/AdminDashboard';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
//import OrderDetails from './pages/OrderDetails';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');


  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'productList':
        return <ProductList setCurrentPage={setCurrentPage} />;
      case 'cart':
        return <Cart setCurrentPage={setCurrentPage} />;
      case 'orderHistory':
        return <OrderHistory setCurrentPage={setCurrentPage} />;
      case 'adminDashboard':
        return <AdminDashboard setCurrentPage={setCurrentPage} />;
      case 'login':
        return <LoginPage setCurrentPage={setCurrentPage} />;
      case 'signup':
        return <SignupPage setCurrentPage={setCurrentPage} />;
  
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <CartProvider>
      <Navbar setCurrentPage={setCurrentPage} />
      {renderCurrentPage()}
    </CartProvider>
  );
};

export default App;
