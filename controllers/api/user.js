const router = require('express').Router();
const { User } = require('../../models');

// For when the user interacts with the user table in the database

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: {email: req.body.email } });
        console.log(userData)
        if (!userData) {
            res
              .status(400)
              .json({ message: 'Incorrect email or password, please try again' });
            return;
          }
      
          const validPassword = await userData.checkPassword(req.body.password);
      
          if (!validPassword) {
            res
              .status(400)
              .json({ message: 'Incorrect email or password, please try again' });
            return;
          }
      
          req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            
            res.json({ user: userData, message: 'You are now logged in!' });
          });

    } catch (err) {
        res.status(400).json({ message: 'dfdfdf'});
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