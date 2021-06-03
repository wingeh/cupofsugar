const router = require('express').Router();
const { User, Product, Messages } = require('../models');

router.get('/', async (req, res) => {
    try {
        const productData = await Product.findAll({
            order:[['updatedAt',  'DESC']]
        });

        const products = productData.map((product) => product.get({ plain: true }));
        console.log(products)
        res.render('homepage', { products });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    try {
        if (req.session.logged_in) {
            res.redirect('/');
            return;
          }
        
          res.render('login');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;