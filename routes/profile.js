const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile_controller.js');
const profileValidationRules = require('../validation_rules/profile');

//  GET profile 
router.get('/', profileController.getProfile);

//  GET profile's photos
router.get('/photos', profileController.getPhotos);

//  GET profile's photos
router.get('/albums', profileController.getAlbums);

//  PUT a specific profile 
router.put('/', profileValidationRules.updateProfileRules, profileController.updateProfile);

module.exports = router;