const router = require('express').Router();
const { User } = require('../../models');

// For when the user interacts with the user table in the database

router.get('/', async (req, res) => {
    try {

    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
// for when user signs up
// TODO 1. check if user exists (find one)
// 2. If information is accepted session is created
// 3. User is signed in and redirected to news-feed page
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