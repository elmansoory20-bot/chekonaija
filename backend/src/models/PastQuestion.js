const mongoose = require('mongoose');

const pastQuestionSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  options: {
    A: String,
    B: String,
    C: String,
    D: String,
  },
  correctAnswer: {
    type: String,
    enum: ['A', 'B', 'C', 'D'],
    required: true,
  },
  explanation: {
    type: String,
  },
  examYear: {
    type: Number,
    required: true,
  },
  examSemester: {
    type: String,
    enum: ['first', 'second'],
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    default: 'medium',
  },
  institution: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('PastQuestion', pastQuestionSchema);