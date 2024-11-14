import React from 'react';
import '../styles/LoginPage.css';

const LoginPage = ({ setCurrentPage }) => {
  const handleLogin = (event) => {
    event.preventDefault();
    // Example logic for successful login
    setCurrentPage('productList'); // Navigate to Product List after successful login
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p className="signup-link">
          Don’t have an account? <span onClick={() => setCurrentPage('signup')}>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
