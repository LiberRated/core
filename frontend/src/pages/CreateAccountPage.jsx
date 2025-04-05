import React from 'react';
import { Link } from 'react-router-dom';
import '../css/CreateAccountPage.css';

function CreateAccountPage() {
  return (
    <div className="create-account-page">
      <button className="back-button">
        <Link to="/register">← Back</Link>
      </button>

      <h2>Create an account</h2>

      <label htmlFor="email">Please enter your email address</label>
      <input type="email" id="email" placeholder="hello@liber-rated.com" />

      <label htmlFor="password">Please type your password</label>
      <input type="password" id="password" />

      <label htmlFor="confirm-password">Please retype your password</label>
      <input type="password" id="confirm-password" />

      <div>
        <input type="checkbox" id="agree" />
        <label htmlFor="agree">I agree to the LiberRated terms and conditions.</label>
        <p>
          <span className="required">*</span>{' '}
          <Link to="/terms">Read terms and conditions here</Link>
        </p>
      </div>

      <button type="submit">Create new account and continue</button>
    </div>
  );
}

export default CreateAccountPage;
