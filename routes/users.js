const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users_controller');
const userValidationRules = require('../validation_rules/user')

/* GET / */
router.get('/', usersController.index);

/* GET /:userId */
router.get('/:userId', usersController.show);

/* POST /*/
router.post('/', userValidationRules.createRules, usersController.store);

/* PUT /:userId */
router.put('/:userId', userValidationRules.updateRules, usersController.update);

/* POST /:userId */
router.delete('/:userId', usersController.destroy);

module.exports = router;