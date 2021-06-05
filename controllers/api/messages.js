const router = require('express').Router();
const { Messages } = require('../../models');
require('dotenv').config();
const Cryptr = require('cryptr');
const { update } = require('../../models/user');
const cryptr = new Cryptr(process.env.Cryptr);

router.get('/', async (req, res) => {
    try {
        if (req.session.logged_in) {
            const messageData = await Messages.findAll({
                where: {user_id: req.session.user_id},
                order: [['updatedAt',  'DESC']]
            });
            
            const messages = messageData.map((message) => message.get({ plain: true }));
           
            const decrypt = messages.map((mess) => {
                const obj = {};
                obj.id = mess.id;
                obj.messages = cryptr.decrypt(mess.messages);
                obj.user_id = mess.user_id;
                obj.product_id = mess.product_id;
                obj.created_at = mess.createdAt;
                obj.updated_at = mess.updatedAt;
                console.log(obj)
                return obj;
            }) 
            res.status(200).json(decrypt);
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
            const encryptedMessage = cryptr.encrypt(req.body.messages)
            const messageData = await Messages.create({
                messages: encryptedMessage,
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