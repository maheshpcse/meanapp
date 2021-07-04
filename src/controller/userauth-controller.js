const _ = require('underscore');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const CONFIG = require('../config/config.js');
const USERQUERY = require('../library/userquery');
const USERS = require('../model/Users-model');
var DIR = './uploads/';

// -> Multer Upload Storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR)
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname)
    }
});

const uploadSingleFile = multer({
    storage: storage
}).single('file');

const uploadMultipleFiles = multer({
    storage: storage
}).array('files');

// GET user login - API
const userLogin = async (request, response, next) => {
    console.log('Request body isss', request.body);
    let result = {};
    let message = '';
    try {
        const userInput = request.body.userinput;
        const password = request.body.password;
        const whereRaw = `(email='${userInput}' OR username='${userInput}') AND password='${password}'`;
        await USERS.query().select('*').whereRaw(whereRaw).then(async data => {
            if (!data || data.length == 0) {
                message = 'Email or Password is not found.';
                throw message;
            }
            const token = jwt.sign({
                user_id: data[0].user_id,
                email: data[0].email,
                username: data[0].username,
                password: data[0].password
            }, CONFIG.database.securitykey, {
                algorithm: 'HS256',
                expiresIn: '2m'
            });
            data[0].token = token;
            result = {
                success: true,
                error: false,
                statusCode: 200,
                message: 'User login successful',
                data: data[0]
            }
        }).catch(getError => {
            throw getError;
        });
    } catch (error) {
        console.log('Error at try catch api result', error);
        result = {
            success: false,
            error: true,
            statusCode: 500,
            message: message || 'Error at try catch api result',
            data: []
        }
    }
    return response.status(200).json(result);
}

// GET user signup - API
const userSignup = async (request, response, next) => {
    console.log('Request body isss', request.body);
    let result = {};
    let message = '';
    try {
        const userPayload = {
            fullname: request.body.fullname,
            username: request.body.username,
            email: request.body.email,
            password: request.body.password,
            mobile: request.body.mobile.toString(),
            profile: null,
            role: 'user',
            status: 1
        }
        await USERS.query().insert(userPayload).then(async data => {
            result = {
                success: true,
                error: false,
                statusCode: 200,
                message: 'User signup successful',
                data: data
            }
        }).catch(getError => {
            throw getError;
        });
    } catch (error) {
        console.log('Error at try catch api result', error);
        result = {
            success: false,
            error: true,
            statusCode: 500,
            message: message || 'Error at try catch api result',
            data: []
        }
    }
    return response.status(200).json(result);
}

// GET user re-signIn - API
const userReSignIn = async (request, response, next) => {
    console.log('Request body isss', request.body);
    let result = {};
    let message = '';
    try {
        const token = jwt.sign({
            user_id: request.body.user_id,
            email: request.body.email,
            username: request.body.username,
            password: request.body.password
        }, CONFIG.database.securitykey, {
            algorithm: 'HS256',
            expiresIn: '3m'
        });
        request.body.token = token;
        result = {
            success: true,
            error: false,
            statusCode: 200,
            message: 'User re-signin successful',
            data: request.body
        }
    } catch (error) {
        console.log('Error at try catch api result', error);
        result = {
            success: false,
            error: true,
            statusCode: 500,
            message: message || 'Error at try catch api result',
            data: []
        }
    }
    return response.status(200).json(result);
}

// POST user profile upload - API
const userProfileUpload = async (request, response, next) => {
    console.log('Request body isss', request.body);
    let result = {};
    let message = '';
    try {
        await uploadSingleFile(request, response, (err, data) => {
            console.log(request.body);
            console.log(request.file);
            console.log('file name is:', request.file);
            if (err) {
                console.log("Error while file receiving", err);
                result = {
                    success: false,
                    statusCode: 403,
                    message: 'Erro while receiving a file',
                    data: err
                }
                return response.status(200).json(result);
            } else if (!request.file) {
                console.log("No file received");
                result = {
                    success: false,
                    statusCode: 404,
                    message: 'No file received',
                    data: null
                }
                return response.status(200).json(result);
            } else {
                result = {
                    success: true,
                    statusCode: 200,
                    message: 'Profile upload successful',
                    data: data
                }
                return response.status(200).json(result);
            }
        });
    } catch (error) {
        console.log('Error at try catch api result', error);
        result = {
            success: false,
            error: true,
            statusCode: 500,
            message: message || 'Error at try catch api result',
            data: []
        }
        return response.status(200).json(result);
    }
}

module.exports = {
    userLogin,
    userSignup,
    userReSignIn,
    userProfileUpload
}