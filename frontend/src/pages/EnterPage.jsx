import React from 'react';
import welcomeImage from '../images/welcome.jpg';
import '../css/EnterPage.css';

function EnterPage({ onCreateAccount, onSignIn, onContinue }) {
  return (
    <div className="enter-page">
      <img src={welcomeImage} alt="Happy people illustration" />
      <h1>Welcome to LiberRated!</h1>
      <p>Your tool for <strong>finding local businesses</strong> that match your <strong>accessibility and dietary needs!</strong></p>
      <p>Dive into our <strong>vibrant community</strong>, crafted to <strong>make accessibility a breeze</strong> and to <strong>unite kindred spirits.</strong></p>
      <p>Let's <strong>explore together</strong> and <strong>unleash the freedom to connect, discover, and thrive!</strong></p>

      <div className="button-group">
        <button onClick={onCreateAccount}>Create a new account</button>
        <button onClick={onSignIn}>Sign into existing account</button>
        <button onClick={onContinue}>Explore without an account</button>
      </div>
    </div>
  );
}

export default EnterPage;
