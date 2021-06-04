const _ = require('underscore');
const jwt = require('jsonwebtoken');
const randomstring = require("randomstring");
const CONFIG = require('../config/config.js');
const USERQUERY = require('../library/userquery');
const USERS = require('../model/Users-model');
const BOOKING = require('../model/Booking-model.js');
const BEAUTY_PARLOURS = require('../model/Beauty-parlours-model.js');
const BEAUTY_SERVICES = require('../model/Beauty_services-model.js');
const BEAUTY_SUB_SERVICES = require('../model/Beauty_sub_services-model.js');

// GET beauty parlour services - API
const getAllBeautyServices = async (request, response, next) => {
    console.log('Request body isss', request.body);
    let result = {};
    let message = '';
    let mainData = [];
    try {
        // GET data list
        await BEAUTY_SERVICES.query()
            .select('bs.*', 'bs.main_service_id AS id', 'bs.service_name AS itemName')
            .alias('bs')
            .then(async data => {
                console.log('Get all beauty services list isss', data);
                mainData[0] = data;
            }).catch(listError => {
                throw listError;
            });
        // GET data list
        await BEAUTY_SUB_SERVICES.query()
            .select('bss.*', 'bss.sub_service_id AS id', 'bss.sub_service_name AS itemName')
            .alias('bss')
            .then(async data => {
                console.log('Get all beauty sub services list isss', data);
                mainData[1] = _.groupBy(data, 'main_service_id');
            }).catch(listError => {
                throw listError;
            });
            result = {
                success: true,
                error: false,
                statusCode: 200,
                message: 'Get all beauty services list successful',
                data: mainData
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
        await BEAUTY_PARLOURS.query().insert(request.body).then(async data => {
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
    getAllBeautyServices,
    addBeautician,
    addBeautyParlour
}