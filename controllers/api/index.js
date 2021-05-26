const router = require('express').Router();
const userRoutes = require('./user');
const postRoutes = require('./post');
const messageRoutes = require('./messages');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/messages', messageRoutes);

module.exports = router;