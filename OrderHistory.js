// src/pages/OrderHistory.js
import React from 'react';
import ordersData from '../data/ordersData';
import '../styles/OrderHistory.css';

const OrderHistory = ({ setCurrentPage }) => {
  const handleViewDetails = (orderId) => {
    // Set current page to order details, you can also pass orderId to the details page
    setCurrentPage('orderDetails', orderId);
  };

  return (
    <div className="order-history">
      <h2>Order History</h2>
      {ordersData.map((order) => (
        <div key={order.id} className="order-item">
          <p>Order ID: {order.id}</p>
          <p>Total Amount: ${order.total}</p>
          <button onClick={() => handleViewDetails(order.id)}>View Details</button>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
