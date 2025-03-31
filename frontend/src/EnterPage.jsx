import React from 'react';
import './EnterPage.css';

const EnterPage = ({ onCreateAccount, onSignIn, onContinue }) => {
  return (
    <div className="enter-page">
      <h1>Welcome to Our App</h1>
      <p>Please choose one of the options below:</p>
      <div className="button-group">
        <button onClick={onCreateAccount}>Create Account</button>
        <button onClick={onSignIn}>Sign In</button>
        <button onClick={onContinue}>Continue Without Account</button>
      </div>
    </div>
  );
};

export default EnterPage;
