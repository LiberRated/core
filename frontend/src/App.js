import React from 'react';
import './css/App.css';

import EnterPage from './pages/EnterPage';

function App() {
  const handleCreateAccount = () => {
    alert('Redirect to Create Account');
    // e.g. navigate('/register');
  };

  const handleSignIn = () => {
    alert('Redirect to Sign In');
    // e.g. navigate('/login');
  };

  const handleContinue = () => {
    alert('Continuing without account');
    // e.g. navigate('/dashboard');
  };

  return (
    <div className="App">
      <EnterPage
        onCreateAccount={handleCreateAccount}
        onSignIn={handleSignIn}
        onContinue={handleContinue}
      />
    </div>
  );
}

export default App;

