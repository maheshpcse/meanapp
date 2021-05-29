const _ = require('underscore');
const jwt = require('jsonwebtoken');
const CONFIG = require('../config/config.js');
const USERQUERY = require('../library/userquery');
const USERS = require('../model/Users-model');
const BOOKING = require('../model/Booking-model.js');
const BEAUTICIANS = require('../model/Beauticians-model.js');

// GET all beauticians - API
const getAllBeauticians = async (request, response, next) => {
    console.log('Request body isss', request.body);
    let result = {};
    let message = '';
    let list = [];
    let count = 0;
    try {
        let { limit, page, query, status } = request.body;
        page = (Number(page) - 1) * Number(limit);
        let whereRaw = `(bt.beautician_name LIKE '%${query}%' OR bt.experience LIKE '%${query}%' OR bt.parlour_name LIKE '%${query}%' OR bt.place LIKE '%${query}%' OR bt.rating LIKE '%${query}%')`;
        if (status === 1 || status === 0) {
            whereRaw += ` AND (bt.status=${Number(status)})`;    
        }
        console.log('where condition isss', whereRaw);
        // GET data list
        await BEAUTICIANS.query()
            .select('bt.*')
            .alias('bt')
            .whereRaw(whereRaw)
            .limit(limit)
            .offset(page)
            .then(async data => {
                console.log('Get all user beauticians data isss', data);
                list = data;
            }).catch(listError => {
                throw listError;
            });
        // GET data list count
        await BEAUTICIANS.query()
            .count('* as totalBeauticians')
            .alias('bt')
            .whereRaw(whereRaw)
            .then(async data => {
                console.log('Get all user beauticians data count isss', data);
                count = data.length ? data[0].totalBeauticians : 0;
            }).catch(countError => {
                throw countError;
            });
        result = {
            success: true,
            error: false,
            statusCode: 200,
            message: 'Get all user beauticians successful',
            data: list,
            count: count
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

module.exports = {
    getAllBeauticians
}