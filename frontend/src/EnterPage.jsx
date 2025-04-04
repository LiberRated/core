import React from 'react';
import './EnterPage.css';

const EnterPage = ({ onCreateAccount, onSignIn, onContinue }) => {
  return (
    <div className="enter-page">
      <h1>Welcome to Our App</h1>
      <p>Please choose one of the options below:</p>

      <img src="logo192.png" alt="Happy people illustration" className="logo-192" />

      <h2>Welcome to <span className="brand">LiberRated!</span></h2>
      <p>Your tool for <strong>finding local businesses</strong> that match your accessibility and dietary needs!</p>
      <p>Dive into our <strong>vibrant community</strong>, crafted to make accessibility a breeze and to unite kindred spirits.</p>
      <p>Let's <strong>explore together</strong> and unleash the freedom to connect, discover, and thrive!</p>

      <div className="button-group">
        <button className="btn primary" onClick={onCreateAccount}>Create a new account</button>
        <button className="btn secondary" onClick={onSignIn}>Sign into existing account</button>
        <button className="btn outline" onClick={onContinue}>Explore without an account</button>
      </div>
    </div>
  );
};

export default EnterPage;

