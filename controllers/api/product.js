const router = require('express').Router();
const { Product, User } = require('../../models');


router.get('/', async (req, res) => {
    try {
        const productData = await Product.findAll({
            include: { 
                model: User, 
                as: 'user',
            },
            order:[['updatedAt',  'DESC']]
        });
        const products = productData.map((product) => product.get({ plain: true }));
        res.render('homepage', products);
        res.status(200).json(productData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/pantry', async (req, res) => {
    try {
        if (req.session.logged_in) {
            const pantryData = await Product.findAll({ 
                where: {
                    user_id: req.session.user_id
                },
                include: {
                    model: User,
                    as: 'user'
                }
            });
            const pantryItems = pantryData.map((item) => item.get({ plain: true }));
            const name = pantryItems[0].user.name
            console.log(pantryItems)
            res.render('pantry', { pantryItems, name,  logged_in:req.session.logged_in})
            res.json(pantryItems); 
        } else {
            res.redirect('/');
            return;
        }
    } catch (err) {
      res.status(400).json(err);
    }
})

router.get('/create', async (req, res) => {
    try {
        if (req.session.logged_in) {
            res.render('create');
        }

    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        if (req.session.logged_in) {
            const productData = await Product.findByPk(req.params.id)
            const products = productData.get({ plain: true });
            res.status(200).json(products);
        } 
        // else {
        //     res.render('home');
        // }
    } catch (err) {
        res.status(400).json(err);
    }
})


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