import React from 'react';
import { Link } from 'react-router-dom';

function SignInPage() {
  return (
    <div>
      <h2>Sign In</h2>
      <p>This is the Sign In Page.</p>

      <Link to="/" style={{ color: '#ec008c', textDecoration: 'underline' }}>
        ← Back to Home
      </Link>
    </div>
  );
}

export default SignInPage;
