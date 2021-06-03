const router = require('express').Router();
const { Messages } = require('../../models');

router.get('/', async (req, res) => {
    try {
        if (req.session.logged_in) {
            const messageData = await Messages.findAll({
                where: {user_id: req.session.user_id},
                order: [['updatedAt',  'DESC']]
            });

            const messages = messageData.map((message) => message.get({ plain: true}));
            console.log(messages)
            res.status(200).json(messageData);
            // res.render('messages', messages);
        } else {
            res.redirect('/');
        }

    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        if (req.session.logged_in) {
            const messageData = await Messages.create({
                messages: req.body.messages,
                post_id: req.body.post_id,
                user_id: req.session.user_id
            })
            res.status(200).json(messageData);
        } else {
            res.render('homepage');
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

router.delete('/', async (req, res) => {
    try {

    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;