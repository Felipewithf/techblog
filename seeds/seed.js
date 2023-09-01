const sequelize = require('../config/connection');
const { User, Comment, Post } = require('../models');

const user_seedData = require('./user-seed.json');
const post_seedData = require('./post-seed.json');
const comment_seedData = require('./comment-seed.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(user_seedData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of post_seedData) {
    await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const comment of comment_seedData) {
    await Comment.create({
      ...comment,
      user_id: users[Math.floor(Math.random() * users.length)].id,
      post_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();