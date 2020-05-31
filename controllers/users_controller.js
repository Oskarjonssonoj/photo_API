/**
 * User Controller
 */
const { matchedData, validationResult } = require('express-validator');
const models = require('../models');
/**
 * Get all resources
 *
 * GET /
 */
const index = async (req, res) => {
	if (!req.user) {
		res.status(401).send({
			status: 'fail',
			data: 'Authentication Required.',
		});
		return;
	}
	res.send({
		status: 'success',
		data: {
			user: req.user,
		}
	});
}
/**
 * Get a specific resource
 *
 * GET /:userId
 */
const show = async (req, res) => {
	res.status(405).send({
		status: 'fail',
		message: 'Method Not Allowed.',
	});
}

/**
 * Store a new resource
 *
 * POST /
 */
const store = async (req, res) => {
	res.status(405).send({
		status: 'fail',
		message: 'Method Not Allowed.',
	});
}
/**
 * Update a specific resource
 *
 * POST /:userId
 */
const update = async (req, res) => {
	const userId = req.params.userId;
	const user = await new models.User({ id: userId }).fetch({ require: false });
	if (!user) {
		console.log("User to update was not found.");
		res.status(404).send({
			status: 'fail',
			data: 'User Not Found',
		});
		return;
	}
	// Finds the validation errors in this request and wraps them in an object with handy functions
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		console.log("Update user request failed validation:", errors.array());
		res.status(422).send({
			status: 'fail',
			data: errors.array(),
		});
		return;
	}
	const validData = matchedData(req);
	try {
		const updatedUser = await user.save(validData);
		console.log("Updated user successfully:", updatedUser);
		res.send({
			status: 'success',
			data: {
				user,
			},
		});
	} catch (error) {
		res.status(500).send({
			status: 'error',
			message: 'Exception thrown in database when updating a new user.',
		});
		throw error;
	}
}
/**
 * Destroy a specific resource
 *
 * DELETE /:userId
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
	update,
	destroy,
}