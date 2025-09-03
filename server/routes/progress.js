const express = require('express');
const Progress = require('../models/Progress');
const Problem = require('../models/Problem');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();
router.use(requireAuth);

router.post('/progress/toggle', async (req,res) => {
  const { problemId, completed } = req.body;
  const exists = await Problem.findById(problemId);
  if (!exists) return res.status(404).json({ message: 'Problem not found' });
  const doc = await Progress.findOneAndUpdate(
    { userId: req.user._id, problemId },
    { completed, completedAt: completed ? new Date() : null },
    { upsert: true, new: true }
  );
  res.json(doc);
});

router.get('/progress/user', async (req,res) => {
  const items = await Progress.find({ userId: req.user._id, completed: true }).select('problemId -_id').lean();
  res.json(items.map(i => i.problemId.toString()));
});

router.get('/progress/summary', async (req,res) => {
  const total = await Problem.countDocuments();
  const completed = await Progress.countDocuments({ userId: req.user._id, completed: true });
  const percent = total ? Math.round((completed/total)*100) : 0;
  res.json({ total, completed, percent });
});

module.exports = router;
