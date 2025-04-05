import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/SignInPage.css';

function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword((prev) => !prev);

  // Handle fake form submission and navigate to dashboard
  const handleSubmit = (e) => {
    e.preventDefault();
    // You could add validation or API call here
    navigate('/dashboard');
  };

  return (
    <div className="signin-page">
      {/* Back Button */}
      <button className="back-button">
        <Link to="/register">← Back</Link>
      </button>

      {/* Heading */}
      <h2>Sign into your account</h2>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Email Field */}
        <label htmlFor="email">Please enter your email address</label>
        <input
          type="email"
          id="email"
          placeholder="Hello@liber-rated.com"
          required
        />

        {/* Password Field with Toggle */}
        <label htmlFor="password">Please type your password 🔒</label>
        <div className="password-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder="••••••••"
            required
          />
          <button
            type="button"
            className="eye-toggle"
            onClick={togglePassword}
            aria-label="Toggle password visibility"
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        </div>

        {/* Terms */}
        <p className="terms-note">
          <span style={{ color: 'red' }}>*</span>{' '}
          <Link to="/terms">Read terms and conditions here</Link>
        </p>

        {/* Submit */}
        <button type="submit">Sign in and continue</button>
      </form>
    </div>
  );
}

export default SignInPage;
