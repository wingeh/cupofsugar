const router = require('express').Router();
const { Product } = require('../../models');


router.get('/', async (req, res) => {
    try {
        const productData = await Product.findAll({
            order:[['updatedAt',  'DESC']]
        });
        res.status(200).json(productData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        if (req.session.logged_in) {
            const productData = await Product.create({
                product: req.body.product,
                type: req.body.type,
                quantity: req.body.quantity,
                description: req.body.description,
                user_id: req.session.user_id
            })
            res.status(200).json(productData);
        } else {
            res.redirect('/login');
        }
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

router.delete('/:id', async (req, res) => {
    try {
 
    } catch (err) {
        res.status(400).json(err);
    }
})



module.exports = router;