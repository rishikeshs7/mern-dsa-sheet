const mongoose = require('mongoose');
const ProgressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  problemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Problem' },
  completed: { type: Boolean, default: false },
  completedAt: Date
}, { timestamps: true });

ProgressSchema.index({ userId: 1, problemId: 1 }, { unique: true });

module.exports = mongoose.model('Progress', ProgressSchema);
