const router = require('express').Router();
const { User, Product, Messages } = require('../models');

router.get('/', async (req, res) => {
    try {
        const productData = await Product.findAll({
            order:[['updatedAt',  'DESC']]
        });

        const products = productData.map((product) => product.get({ plain: true }));
        console.log(products)
        res.render('homepage', { products, logged_in: req.session.logged_in
        });
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

router.get('/messages', async (req, res) => {
    try {
        const messageData = await Messages.findAll({
            order:[['updatedAt',  'DESC']]
        });

        const messages = messageData.map((messages) => messages.get({ plain: true }));
        console.log(messages)
        res.render('messages', { messages });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/pantry', async (req, res) => {
    console.log ("pantry called")
    try {
        const pantryData = await Product.findAll({
            where: {user_id: req.session.user_id},
            order:[['updatedAt',  'DESC']]
        });
        console.log ("Pantry Data: " + pantryData)
        const pantry = pantryData.map((pantry) => pantry.get({ plain: true }));
        console.log(pantry)
        res.render('pantry', { pantry, logged_in: req.session.logged_in });
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;