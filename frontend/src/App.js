import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './css/App.css';

import EnterPage from './pages/EnterPage';
import RegisterPage from './pages/RegisterPage';
import SignInPage from './pages/SignInPage';
import DashboardPage from './pages/DashboardPage';
import CreateAccountPage from './pages/CreateAccountPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<EnterPageWrapper />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          
        </Routes>
      </div>
    </Router>
  );
}

function EnterPageWrapper() {
  const navigate = useNavigate();

  return (
    <EnterPage
      onCreateAccount={() => navigate('/register')}
      onSignIn={() => navigate('/login')}
      onContinue={() => navigate('/dashboard')}
    />
  );
}

export default App;
