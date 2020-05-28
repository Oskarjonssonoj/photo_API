// Auth controller
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { matchedData, validationResult } = require('express-validator');
const models = require('../models');


// const login = async (req, res) => {
    
//     if(!req.user) {
//         res.status(401).send({
//             status: 'fail',
//             data: 'Authentication Required',
//         });
//         return; 
//     }
    
//     // construct JWT payload
//     const payload = {
//         data: {
//             id: req.user.get('id'),
//             username: req.user.get('username'),
//             is_admin: req.user.get('is_admin'),
//         },
//     };

//     // sign payload and get access-token
//     const access_token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_LIFETIME || '1h'});

//     // sign payload and get refresh-token
//     const refresh_token = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn: process.env.REFRESH_TOKEN_LIFETIME || '1w'});

//     res.send({
//         status: "success",
//         data: {
//             access_token,
//             refresh_token
//         },
//     });
// }

// // Issue a new access-token using a refresh-token
// const refresh = (req, res) => {
//     const token = getTokenFromHeaders(req);
//     if (!token) {
//         res.status(401).send({
//             status: 'fail',
//             data: 'No token found in request headers'
//         });
//         return;
//     }

//     try {
//         // verify token using the refresh token secret
//         const { data } = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);

//         // construct new payload
//         const payload = {
//             data,
//         }

//         // Issue a new token using the access token secret
//         const access_token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_LIFETIME || '1h' })

//         res.send({
//             status: 'success',
//             data: {
//                 access_token,
//             }
//         })

//     } catch (error) {
//         res.status(403).send({
//             status: 'fail',
//             data: 'Invalid token',
//         });
//         return;
//     }
// }

// Register account
// POST /register

const register = async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
const errors = validationResult(req);
if (!errors.isEmpty()) {
    console.log("Create user request failed validation:", errors.array());
    res.status(422).send({
        status: 'fail',
        data: errors.array(),
    });
    return;
}

const validData = matchedData(req);

// generate a hash of validData.password
try {
    validData.password = await bcrypt.hash(validData.password, models.User.hashSaltRounds);

} catch (error) {
    res.status(500).send({
        status: 'error',
        message: 'Exception thrown when hashing the password',
    })
}

try {
    const user = await new models.User(validData).save();
    console.log("Created new user successfully:", user);

    res.status(201).send({
        status: 'success',
        data: null,
    });

} catch (error) {
    res.status(500).send({
        status: 'error',
        message: 'Exception thrown in database when creating a new user.',
    });
    throw error;
    }
}


// // Get token from HTTP headers
// const getTokenFromHeaders = (req) => {
//     // Check that we have Authorization header
//     if(!req.headers.authorization) {
//         return false;
//     }
//     // Check that the Authorization type is Bearer
//     const [authType, token] = req.headers.authorization.split(' ');
    
//     if (authType.toLowerCase() !== 'bearer') {
//         return false;
//     }

//     return token;
// }

module.exports = {
    register,
}