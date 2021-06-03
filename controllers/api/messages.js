const router = require('express').Router();
const { Messages } = require('../../models');

router.get('/', async (req, res) => {
    try {
        if(req.sessions.logged_in) {
            const messegeData = await Messages.findAll({
                where: { user_id: req.session.user_id},
            });

            const message = messsageData.map((message) => message.get{{plain:true}});
            res.
        }

    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/', async (req, res) => {
    try {

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