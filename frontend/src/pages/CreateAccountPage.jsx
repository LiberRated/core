import React from 'react';
import { Link } from 'react-router-dom';

function CreateAccountPage() {
  return (
    <div className="create-account-page">
      <Link to="/register" className="back-button">← Back</Link>

      <h2>Create an account</h2>

      <label htmlFor="email">Please enter your email address</label>
      <input type="email" id="email" placeholder="hello@liber-rated.com" />

      <label htmlFor="password">Please type your password</label>
      <input type="password" id="password" />

      <label htmlFor="confirm-password">Please retype your password</label>
      <input type="password" id="confirm-password" />

      <div className="terms">
        <input type="checkbox" id="agree" />
        <label htmlFor="agree">I agree to the LiberRated terms and conditions.</label>
        <p className="terms-note">
          <span style={{ color: 'red' }}>*</span>{' '}
          <Link to="/terms">Read terms and conditions here</Link>
        </p>
      </div>

      <button className="btn primary">Create new account and continue</button>
    </div>
  );
}

// ✅ Make sure this matches the component name
export default CreateAccountPage;
