const router = require('express').Router();
const { User, Product, Messages } = require('../models');

router.get('/', async (req, res) => {
    try {
        const productData = await Product.findAll({
            include: {
                model: User,
                as: 'user'
            },
            order:[['updatedAt',  'DESC']]
        });
        const products = productData.map((product) => product.get({ plain: true }));
        const name = products[0].user.name
        res.render('homepage', { products, name });
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