const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

/**
 * User Model Schema
 * Defines the structure for user documents in MongoDB
 * Includes basic authentication fields with validation
 */
const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true // Remove whitespace from both ends
  },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true, // Store emails in lowercase
    trim: true
  },
  password: { 
    type: String, 
    required: true
  },
  // Timestamps for when the account was created/updated
}, { timestamps: true });

/**
 * Password Hashing Middleware
 * Automatically hashes the password before saving to database
 * Only runs when the password field has been modified
 */
userSchema.pre('save', async function(next) {
  // Skip hashing if password hasn't changed
  if (!this.isModified('password')) return next();
  
  try {
    // Generate a salt and hash the password
    // Using 10 rounds - good balance between security and performance
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    next(error);
  }
});

/**
 * Method to compare password for login
 * Can be used as: user.comparePassword(candidatePassword)
 */
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Export the model for use in the auth routes
module.exports = mongoose.model('User', userSchema);
