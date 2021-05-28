const router = require('express').Router();
const { Product } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const productData = await Product.create(req.body)
        res.status(200).json(productData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const productData = await Product.create(req.body)
        res.status(200).json(productData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/', async (req, res) => {
    try {

    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/', async (req, res) => {
    try {

    } catch (err) {
        res.status(400).json(err);
    }
})



module.exports = router;