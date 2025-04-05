const mongoose = require('mongoose');

/**
 * Restaurant Model Schema
 * Defines the structure for restaurant documents in MongoDB
 * Includes accessibility information, business details, and location data
 */
const restaurantSchema = new mongoose.Schema({
  // Basic Information
  name: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    street: {
      type: String,
      required: true,
      trim: true
    },
    city: {
      type: String,
      required: true,
      trim: true
    },
    province: {
      type: String,
      required: true,
      trim: true
    },
    postalCode: {
      type: String,
      trim: true
    }
  },
  website: {
    type: String,
    trim: true
  },

  // Contact & Business Hours
  businessHours: {
    monday: {
      isOpen: Boolean,
      hours: String
    },
    tuesday: {
      isOpen: Boolean,
      hours: String
    },
    wednesday: {
      isOpen: Boolean,
      hours: String
    },
    thursday: {
      isOpen: Boolean,
      hours: String
    },
    friday: {
      isOpen: Boolean,
      hours: String
    },
    saturday: {
      isOpen: Boolean,
      hours: String
    },
    sunday: {
      isOpen: Boolean,
      hours: String
    }
  },

  // Location (GeoJSON Point)
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],  // [longitude, latitude]
      required: true
    }
  },

  // Categories and Type
  categories: [{
    type: String,
    trim: true
  }],
  type: {
    type: String,
    required: true,
    trim: true
  },

  // Ownership Information
  ownership: {
    womenOwned: {
      type: Boolean,
      default: false
    },
    disabledOwned: {
      type: Boolean,
      default: false
    },
    lgbtqia2sOwned: {
      type: Boolean,
      default: false
    }
  },

  // Accessibility Features
  accessibility: {
    automaticDoors: {
      type: Boolean,
      default: false
    },
    wheelchairAccessible: {
      type: Boolean,
      default: false
    },
    adultChangingTable: {
      type: Boolean,
      default: false
    },
    lift: {
      type: Boolean,
      default: false
    }
  },

  // Staff Information
  staff: {
    languages: [{
      type: String,
      trim: true
    }],
    attributes: [{
      type: String,
      trim: true
    }]
  },

  // Dietary Options
  dietaryOptions: {
    veganOptions: {
      type: Boolean,
      default: false
    },
    dairyFreeOptions: {
      type: Boolean,
      default: false
    },
    glutenFreeOptions: {
      type: Boolean,
      default: false
    }
  },

  // Noise Levels
  noiseLevel: {
    type: String,
    enum: ['low', 'moderate', 'high'],
    default: 'moderate'
  },
  quietHours: [{
    startTime: String,
    endTime: String
  }],

  // Metadata
  lastUpdated: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Create a 2dsphere index for geospatial queries
restaurantSchema.index({ location: '2dsphere' });

// Export the model
module.exports = mongoose.model('Restaurant', restaurantSchema); 