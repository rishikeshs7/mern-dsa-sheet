const mongoose = require('mongoose');
const ProblemSchema = new mongoose.Schema({
  topicId: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic' },
  title: String,
  description: String,
  difficulty: { type: String, enum: ['Easy','Medium','Tough'], default: 'Easy' },
  links: {
    youtube: String,
    leetcode: String,
    codeforces: String,
    article: String
  },
  order: Number
}, { timestamps: true });
module.exports = mongoose.model('Problem', ProblemSchema);
