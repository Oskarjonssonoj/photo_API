const express = require('express');
const router = express.Router();
const photosController = require('../controllers/photos_controller')

/* GET / */
router.get('/', photosController.index);

/* GET /:photoId */
router.get('/:photoId', photosController.show);

/* POST /:photoId */
router.post('/', photosController.store);

/* POST /:photoId */
router.put('/:photoId', photosController.update);

/* POST /:photoId */
router.delete('/:photoId', photosController.destroy);

module.exports = router;