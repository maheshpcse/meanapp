const _ = require('underscore');
const jwt = require('jsonwebtoken');
const randomstring = require("randomstring");
const CONFIG = require('../config/config.js');
const USERQUERY = require('../library/userquery');
const USERS = require('../model/Users-model');
const BOOKING = require('../model/Booking-model.js');
const BEAUTICIANS = require('../model/Beauticians-model.js');

// ADD beautician - API
const addBeautician = async (request, response, next) => {
    console.log('Request body isss', request.body);
    let result = {};
    let message = '';
    try {
        const beauticianPayload = {
            fullname: request.body.fullname,
            username: request.body.username,
            email: request.body.email,
            password: request.body.password,
            mobile: request.body.mobile.toString(),
            profile: null,
            role: 'beautician',
            status: 1
        }
        await USERS.query().insert(beauticianPayload).then(async data => {
            result = {
                success: true,
                error: false,
                statusCode: 200,
                message: 'Add beautician successful',
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

// ADD beauty parlour - API
const addBeautyParlour = async (request, response, next) => {
    console.log('Request body isss', request.body);
    let result = {};
    let message = '';
    try {
        await BEAUTICIANS.query().insert(request.body).then(async data => {
            result = {
                success: true,
                error: false,
                statusCode: 200,
                message: 'Add beauty parlour successful',
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
    addBeautician,
    addBeautyParlour
}