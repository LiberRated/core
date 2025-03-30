const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const session = require('express-session');
const authRoutes = require('./routes/auth');

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Set up middleware
// CORS setup for frontend communication - adjust origin based on frontend URL
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true // This allows cookies to be sent with requests (Important for authentication session management)
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session configuration for maintaining user login state
app.use(session({
  secret: 'my_session_secret_key', // TODO: Move this to .env file for production
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: process.env.NODE_ENV === 'production',
    maxAge: 24 * 60 * 60 * 1000
  }
}));

// Connect to MongoDB using connection string from .env
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Set up API routes
app.use('/api/auth', authRoutes);

// Root route - simple API health check endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
