/**
 * Albums Controller
 */
const { matchedData, validationResult } = require('express-validator');
const models = require('../models');

/**
 * Get all resources
 *
 * GET /
 */
const index = async (req, res) => {
		let user = null;
		try {
			user = await models.User.fetchById(req.user.data.id, { withRelated: ['albums'] });
		} catch (error) {
			console.error(error);
			res.sendStatus(404);
			return;
		}
	
		// get this user's albums
		const albums = user.related('albums');
	
		res.send({
			status: 'success',
			data: {
				albums,
			},
		});
}

/**
 * Get a specific resource
 *
 * GET /:albumId
 */
const show = async (req, res) => {
	const album = await new models.Album({ id: req.params.albumId })
		.fetch({ withRelated: ['photos'] });
		//check if user owns the album
		if(req.user.id === album.attributes.user_id){
			res.send({
				status: 'success',
				data: {
					album,
				}
			});
		} else {
			res.send({
				status:'fail',
				data: "sorry, you don't own that album"
			})
		}
}

/**
 * Store a new resource
 *
 * POST /
 */
const store = async (req, res) => {
	// Finds the validation errors in this request and wraps them in an object with handy functions
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		console.log("Create photo request failed validation:", errors.array());
		res.status(422).send({
			status: 'fail',
			data: errors.array(),
		});
		return;
	}
	const validData = matchedData(req);
	console.log('validData', validData);
	
	try {
		const album = await new models.Album(validData).save({user_id: req.user.attributes.id});
		console.log("Created new photo successfully:", album);
		res.send({
			status: 'success',
			data: {
				album,
			},
		});
	} catch (error) {
		res.status(500).send({
			status: 'error',
			message: 'Exception thrown in database when creating a new album.',
		});
		throw error;
	}
}

/**
 * Add photo to album
 *
 * POST /:albumId/photos
 */
const addPhotoToAlbum = async (req, res) => {
	// Finds the validation errors in this request and wraps them in an object with handy functions
    const error = validationResult(req);
    if(!error.isEmpty()){
        res.status(422).send({
            status: 'fail',
            data: error.array()
        });
        return;
    }
    try {
        const photo = await models.Photos.fetchById(req.body.photo_id);
        const album = await models.Album.fetchById(req.params.albumId);
        const result = await album.photos().attach([photo]);
        res.status(201).send({
            status: 'success',
            data: result,
        })
    } catch (error) {
        res.sendStatus(404);
        throw error;
    }
}

/**
 * Update a specific resource
 *
 * POST /:albumId
 */
const update = (req, res) => {
	res.status(405).send({
		status: 'fail',
		message: 'Method Not Allowed.',
	});
}

/**
 * Destroy a specific resource
 *
 * DELETE /:albumId
 */
const destroy = (req, res) => {
	res.status(405).send({
		status: 'fail',
		message: 'Method Not Allowed.',
	});
}

module.exports = {
	index,
	show,
	store,
	addPhotoToAlbum,
	update,
	destroy,
}