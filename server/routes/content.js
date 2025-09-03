const express = require('express');
const Chapter = require('../models/Chapter');
const Topic = require('../models/Topic');
const Problem = require('../models/Problem');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

// public: chapters
router.get('/chapters', async (req,res) => {
  const chapters = await Chapter.find().sort('order').lean();
  res.json(chapters);
});

// topics by chapter
router.get('/chapters/:id/topics', async (req,res) => {
  const topics = await Topic.find({ chapterId: req.params.id }).sort('order').lean();
  res.json(topics);
});

// problems by topic
router.get('/topics/:id/problems', async (req,res) => {
  const problems = await Problem.find({ topicId: req.params.id }).sort('order').lean();
  res.json(problems);
});

// admin create (basic — protect in prod)
router.post('/chapters', requireAuth, async (req,res) => {
  const c = await Chapter.create(req.body); res.json(c);
});
router.post('/topics', requireAuth, async (req,res) => {
  const t = await Topic.create(req.body); res.json(t);
});
router.post('/problems', requireAuth, async (req,res) => {
  const p = await Problem.create(req.body); res.json(p);
});

module.exports = router;
