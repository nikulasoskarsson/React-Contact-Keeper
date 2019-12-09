const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
  // Relationship between contacts and users, each user has his own set of contacts
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },

  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  type: {
    type: String,
    default: 'personal'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('contact', ContactSchema);
