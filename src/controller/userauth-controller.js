const _ = require('underscore');
const jwt = require('jsonwebtoken');
const CONFIG = require('../config/config.js');
const USERQUERY = require('../library/userquery');
const USERS = require('../model/Users-model');

// GET user login - API
const userLogin = async (request, response, next) => {
    console.log('Request body isss', request.body);
    let result = {};
    let message = '';
    try {
        const email = request.body.email;
        const password = request.body.password;
        const whereRaw = `email='${email}' AND password='${password}'`;
        await USERS.query().select('*').whereRaw(whereRaw).then(async data => {
            if (!data || data.length == 0) {
                message = 'Email or Password is not found.';
                throw message;
            }
            const token = jwt.sign({
                id: data[0].id,
                email: data[0].email,
                username: data[0].username,
                password: data[0].password
            }, CONFIG.database.securitykey, {
                algorithm: 'HS256',
                expiresIn: '1h'
            });
            data[0].token = token;
            result = {
                success: true,
                error: false,
                statusCode: 200,
                message: 'User login successful',
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
            mobile: request.body.mobile,
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

module.exports = {
    userLogin,
    userSignup
}