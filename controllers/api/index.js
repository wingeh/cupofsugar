const router = require('express').Router();
const Cryptr = require('cryptr');
const cryptr = new Cryptr("non0string");
const userRoutes = require('./user');
const productRoutes = require('./product');
const messageRoutes = require('./messages');

router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/messages', messageRoutes);

module.exports = router;