const router = require('express').Router();
const { Messages, User } = require('../../models');
require('dotenv').config();
const Cryptr = require('cryptr');
const { update } = require('../../models/user');
const { rootCertificates } = require('tls');
const { timeLog, timeStamp } = require('console');
const cryptr = new Cryptr(process.env.CRYPTR);




router.get('/', async (req, res) => {
    try {
        if (req.session.logged_in) {
            const messageData = await Messages.findAll({
                where: {user_id: req.session.user_id},
                include: { 
                    model: User, 
                    as: 'user',
                },
                order: [['updatedAt',  'DESC']]
            });
            
            const messages = messageData.map((message) => message.get({ plain: true }));
            const name = message[0].user.name
            const decrypt = messages.map((mess) => {
                const obj = {};
                obj.id = mess.id;
                obj.messages = cryptr.decrypt(mess.messages);
                obj.user_id = mess.user_id;
                obj.user = mess.user
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
    console.log("send message", req.body);
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

router.post('/reply', async (req, res) => {
    console.log("reply message", req.body);

    try {
        if (req.session.logged_in) {
            var id = req.body.id;
            var reply_msg = req.body.reply_msg;
            var reply_data = {
                "msg": reply_msg,
                "user_id": req.session.user_id
            }
      
            console.log("push result", messageData);

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