const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const router = express.Router();

/**
 * Authentication Middleware 
 * Checks if a user is logged in before allowing access to protected routes
 * Used for endpoints that require authentication
 */
const isAuthenticated = (req, res, next) => {
  if (req.session && req.session.userId) {
    return next(); // User is authenticated, proceed to the route
  }
  return res.status(401).json({ message: 'Unauthorized: Please login' });
};

/**
 * User Registration Endpoint
 * POST /api/auth/register
 * Creates a new user account and logs them in automatically
 */
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    // Basic validation - make sure all required fields are present
    if (!username || !email || !password) {
      return res.status(400).json({ 
        message: 'Error registering user',
        error: 'All fields are required'
      });
    }
    
    // Check if this email or username already exists in the database
    const existingUser = await User.findOne({ 
      $or: [{ email }, { username }] 
    });
    
    if (existingUser) {
      return res.status(400).json({ 
        message: 'Error registering user',
        error: 'User already exists with that email or username'
      });
    }
    
    // Create a new user document - password gets hashed automatically via the model's pre-save hook
    const user = new User({ username, email, password });
    await user.save();
    
    // Log the user in automatically after registration by setting the session
    req.session.userId = user._id;
    
    // Remove the password field before sending the user object in the response
    const userResponse = user.toObject();
    delete userResponse.password;
    
    // Return the new user data and success message
    res.status(201).json({
      message: 'User registered successfully',
      user: userResponse
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ 
      message: 'Error registering user', 
      error: error.message 
    });
  }
});

/**
 * User Login Endpoint
 * POST /api/auth/login
 * Authenticates a user and creates a session
 */
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Basic validation
    if (!email || !password) {
      return res.status(400).json({ 
        message: 'Error logging in',
        error: 'Email and password are required'
      });
    }
    
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      // Don't specify whether email or password is incorrect for security
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    
    // Verify the password with bcrypt
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    
    // Set the user ID in the session to log them in
    req.session.userId = user._id;
    
    // Remove password before sending response
    const userResponse = user.toObject();
    delete userResponse.password;
    
    // Send the success response
    res.json({
      message: 'Login successful',
      user: userResponse
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      message: 'Error logging in', 
      error: error.message 
    });
  }
});

/**
 * User Logout Endpoint
 * GET /api/auth/logout
 * Ends the user's session
 */
router.get('/logout', (req, res) => {
  try {
    // Destroy the session to log the user out
    req.session.destroy(err => {
      if (err) {
        return res.status(500).json({ 
          message: 'Error logging out', 
          error: err.message 
        });
      }
      // Clear the session cookie in the browser
      res.clearCookie('connect.sid');
      res.json({ message: 'Logged out successfully' });
    });
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({ 
      message: 'Error logging out', 
      error: error.message 
    });
  }
});

/**
 * Get Current User Endpoint
 * GET /api/auth/user
 * Returns the currently logged in user (used for auth state verification)
 * Protected by the isAuthenticated middleware
 */
router.get('/user', isAuthenticated, async (req, res) => {
  try {
    // Fetch the user from the database without the password field
    const user = await User.findById(req.session.userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ user });
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ 
      message: 'Error fetching user', 
      error: error.message 
    });
  }
});

module.exports = router;
