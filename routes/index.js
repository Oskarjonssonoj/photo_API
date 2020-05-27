const express = require('express');
const router = express.Router();
const auth = require('../controllers/middlewares/auth');


// GET
router.get('/', (req, res) => {
  res.send({ status: "success" });
});

router.use('/albums', require('./albums'));
router.use('/photos', require('./photos'));

// POST
router.use('/profile', [auth.basic], require('./profile'));

router.use('/users', require('./users'));


module.exports = router;
