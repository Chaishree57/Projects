import React from 'react';
import '../styles/SignupPage.css';

const SignupPage = ({ setCurrentPage }) => {
  const handleSignup = (event) => {
    event.preventDefault();
    // Example logic for successful signup
    setCurrentPage('login'); // Navigate to Login page after successful signup
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Sign Up</button>
        </form>
        <p className="login-link">
          Already have an account? <span onClick={() => setCurrentPage('login')}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
