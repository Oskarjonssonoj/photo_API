const express = require('express');
const router = express.Router();
const albumsController = require('../controllers/albums_controller')

// GET / 
router.get('/', albumsController.index);

// GET /:albumId 
router.get('/:albumId', albumsController.show);

// POST /
router.post('/', albumsController.store);

// POST /:albumId 
router.put('/:albumId', albumsController.update);

// POST /:albumId 
router.put('/:albumId', albumsController.destroy);

module.exports = router;