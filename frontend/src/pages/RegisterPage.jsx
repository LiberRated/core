import React from 'react';
import { useNavigate } from 'react-router-dom';
import registerImage from '../images/register.jpg';
import '../css/RegisterPage.css';

function RegisterPage() {
  const navigate = useNavigate();

  return (
    <div className="register-page">
      <div className="image-container">
        <button onClick={() => navigate(-1)} className="back-button">
          ← Back
        </button>
        <img
          src={registerImage}
          alt="Two friends smiling and connecting"
          className="register-img"
        />
      </div>

      <div className="register-buttons">
        <button onClick={() => navigate('/login-with-email')}>
          Create an account with email
        </button>

        <p className="or">or</p>

        <button onClick={() => navigate('/dashboard')}>
          Explore LiberRated without an account
        </button>
      </div>
    </div>
  );
}

export default RegisterPage;
