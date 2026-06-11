const mongoose = require('mongoose');

const practiceSetSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  questions: [{
    question: String,
    options: {
      A: String,
      B: String,
      C: String,
      D: String,
    },
    correctAnswer: {
      type: String,
      enum: ['A', 'B', 'C', 'D'],
    },
    explanation: String,
  }],
  institution: {
    type: String,
    required: true,
  },
  isPublic: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('PracticeSet', practiceSetSchema);