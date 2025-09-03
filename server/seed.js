// run: npm run seed
require('dotenv').config();
const mongoose = require('mongoose');
const Chapter = require('./models/Chapter');
const Topic = require('./Models/Topic');
const Problem = require('./Models/Problem');

(async ()=>{
  await mongoose.connect(process.env.MONGO_URI);
  await Chapter.deleteMany({});
  await Topic.deleteMany({});
  await Problem.deleteMany({});
  const c1 = await Chapter.create({ title: 'Arrays', order: 1 });
  const t1 = await Topic.create({ chapterId: c1._id, title: 'Basics', order: 1 });
  await Problem.create([
    { topicId: t1._id, title: 'Two Sum', difficulty: 'Easy', links: { leetcode: 'https://leetcode.com/problems/two-sum' }, order: 1 },
    { topicId: t1._id, title: 'Max Subarray (Kadane)', difficulty: 'Medium', links: { youtube: 'https://youtu.be/...' }, order: 2 },
    { topicId: t1._id, title: 'Product of Array Except Self', difficulty: 'Medium', links: { leetcode: 'https://leetcode.com/problems/product-of-array-except-self' }, order: 3 }
  ]);
  console.log('Seed complete');
  process.exit(0);
})();
