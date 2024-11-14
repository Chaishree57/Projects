// src/pages/Cart.js
import React from 'react';
import { useCart } from '../context/CartContext'; // Import the cart context
import '../styles/Cart.css';

const Cart = ({ setCurrentPage }) => {
  const { cart, updateItemQuantity, removeItem } = useCart(); // Get cart items and update/remove functions from context
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    setCurrentPage('orderHistory'); // Navigate to Order History page
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <p className="cart-item-name">{item.name}</p>
              <div className="quantity-controls">
                <button
                  className="quantity-button"
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity === 1} // Disable button if quantity is 1
                >
                  -
                </button>
                <span className="quantity-display">{item.quantity}</span>
                <button
                  className="quantity-button"
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <p className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</p>
              <button className="remove-button" onClick={() => removeItem(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))
      )}
      <h3 className="total">Total: ${total.toFixed(2)}</h3>
      <button className="checkout-button" onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
};

export default Cart;
