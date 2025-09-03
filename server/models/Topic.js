const mongoose = require('mongoose');
const TopicSchema = new mongoose.Schema({
  chapterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Chapter' },
  title: String,
  description: String,
  order: Number
}, { timestamps: true });
module.exports = mongoose.model('Topic', TopicSchema);
