const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['assignment', 'test', 'announcement', 'news', 'social'],
    default: 'news',
  },
  relatedId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  relatedModel: {
    type: String,
    enum: ['Post', 'Assignment', 'Course', 'PracticeSet'],
  },
  isRead: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Notification', notificationSchema);