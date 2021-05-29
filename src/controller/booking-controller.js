const _ = require('underscore');
const jwt = require('jsonwebtoken');
const randomstring = require("randomstring");
const CONFIG = require('../config/config.js');
const USERQUERY = require('../library/userquery');
const USERS = require('../model/Users-model');
const BOOKING = require('../model/Booking-model.js');
const BEAUTICIANS = require('../model/Beauticians-model.js');

// GET all user bookings - API
const getAllUserBookings = async (request, response, next) => {
    console.log('Request body isss', request.body);
    let result = {};
    let message = '';
    let list = [];
    let count = 0;
    try {
        let { limit, page, query } = request.body;
        page = (Number(page) - 1) * Number(limit);
        const whereRaw = `bk.booking_id LIKE '%${query}%' OR bk.law_firm_name LIKE '%${query}%' OR bk.date LIKE '%${query}%' OR bk.time LIKE '%${query}%' OR bt.beautician_name LIKE '%${query}%'`;
        // GET data list
        await BOOKING.query()
            .select('bk.*', 'bt.*')
            .alias('bk')
            .innerJoin(`${BEAUTICIANS.tableName} AS bt`, 'bt.beautician_id', 'bk.beautician_id')
            .whereRaw(whereRaw)
            .limit(limit)
            .offset(page)
            .then(async data => {
                console.log('Get all user bookings data isss', data);
                list = data;
            }).catch(listError => {
                throw listError;
            });
        // GET data list count
        await BOOKING.query()
            .count('* as totalBookings')
            .alias('bk')
            .innerJoin(`${BEAUTICIANS.tableName} AS bt`, 'bt.beautician_id', 'bk.beautician_id')
            .whereRaw(whereRaw)
            .then(async data => {
                console.log('Get all user bookings data count isss', data);
                count = data.length ? data[0].totalBookings : 0;
            }).catch(countError => {
                throw countError;
            });
        result = {
            success: true,
            error: false,
            statusCode: 200,
            message: 'Get all user bookings successful',
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

// GET bookings by beautician - API
const getBookingsByBeautician = async (request, response, next) => {
    console.log('Request body isss', request.body);
    let result = {};
    let message = '';
    let list = [];
    let count = 0;
    try {
        let { limit, page, query, beautician_id } = request.body;
        page = (Number(page) - 1) * Number(limit);
        const whereRaw = `bk.booking_id LIKE '%${query}%' OR bk.law_firm_name LIKE '%${query}%' OR bk.date LIKE '%${query}%' OR bk.time LIKE '%${query}%' OR bt.beautician_name LIKE '%${query}%'`;
        // GET data list
        await BOOKING.query()
            .select('bk.*', 'bt.*')
            .alias('bk')
            .innerJoin(`${BEAUTICIANS.tableName} AS bt`, 'bt.beautician_id', 'bk.beautician_id')
            .whereRaw(`bk.beautician_id='${beautician_id}' AND ` + whereRaw)
            .limit(limit)
            .offset(page)
            .then(async data => {
                console.log('Get bookings by beautician data isss', data);
                list = data;
            }).catch(listError => {
                throw listError;
            });
        // GET data list count
        await BOOKING.query()
            .count('* as totalBookings')
            .alias('bk')
            .innerJoin(`${BEAUTICIANS.tableName} AS bt`, 'bt.beautician_id', 'bk.beautician_id')
            .whereRaw(`bk.beautician_id='${beautician_id}' AND ` + whereRaw)
            .then(async data => {
                console.log('Get bookings by beautician data count isss', data);
                count = data.length ? data[0].totalBookings : 0;
            }).catch(countError => {
                throw countError;
            });
        result = {
            success: true,
            error: false,
            statusCode: 200,
            message: 'Get bookings by beautician successful',
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

// GET booking by Id - API
const getBookingById = async (request, response, next) => {
    console.log('Request body isss', request.body);
    let result = {};
    let message = '';
    try {
        let { booking_id } = request.body;
        // GET data list
        await BOOKING.query()
            .select('bk.*', 'bt.*')
            .alias('bk')
            .innerJoin(`${BEAUTICIANS.tableName} AS bt`, 'bt.beautician_id', 'bk.beautician_id')
            .whereRaw(`bk.booking_id='${booking_id}'`)
            .then(async data => {
                console.log('Get booking by Id isss', data);
                result = {
                    success: true,
                    error: false,
                    statusCode: 200,
                    message: 'Get booking by Id successful',
                    data
                }
            }).catch(listError => {
                throw listError;
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

// UPDATE booking status by Id - API
const updateBookingStatusById = async (request, response, next) => {
    console.log('Request body isss', request.body);
    let result = {};
    let message = '';
    try {
        let { booking_id, booking_status } = request.body;
        // UPDATE data list
        await BOOKING.query()
            .update({booking_status: Number(booking_status)})
            .alias('bk')
            .whereRaw(`bk.booking_id='${booking_id}'`)
            .then(async data => {
                console.log('Update booking status by Id isss', data);
                result = {
                    success: true,
                    error: false,
                    statusCode: 200,
                    message: 'Update booking status by Id successful',
                    data
                }
            }).catch(updateError => {
                throw updateError;
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

// ADD booking - API
const addBooking = async (request, response, next) => {
    console.log('Request body isss', request.body);
    let result = {};
    let message = '';
    try {
        request.body.booking_id = generateBookingId('');
        // ADD data list
        await BOOKING.query()
            .insert(request.body)
            .then(async data => {
                console.log('Add booking data isss', data);
                result = {
                    success: true,
                    error: false,
                    statusCode: 200,
                    message: 'Add booking data successful',
                    data
                }
            }).catch(addError => {
                throw addError;
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

// DELETE booking by Id - API
const deleteBooking = async (request, response, next) => {
    console.log('Request body isss', request.body);
    let result = {};
    let message = '';
    try {
        let { booking_id, booking_status } = request.body;
        // DELETE data list
        await BOOKING.query()
            .del()
            .alias('bk')
            .whereRaw(`bk.booking_id='${booking_id}'`)
            .then(async data => {
                console.log('Delete booking data isss', data);
                result = {
                    success: true,
                    error: false,
                    statusCode: 200,
                    message: 'Delete booking data successful',
                    data
                }
            }).catch(deleteError => {
                throw deleteError;
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

function generateBookingId(bookingId) {
    const word1 = randomstring.generate({
        length: 5,
        charset: 'alphanumeric',
        capitalization: 'uppercase'
    });
    const word2 = randomstring.generate({
        length: 5,
        charset: 'alphanumeric',
        capitalization: 'uppercase'
    });
    const word3 = randomstring.generate({
        length: 5,
        charset: 'alphanumeric',
        capitalization: 'uppercase'
    });
    bookingId = word1 + '-' + word2 + '-' + word3
    return bookingId;
}

module.exports = {
    getAllUserBookings,
    getBookingsByBeautician,
    getBookingById,
    updateBookingStatusById,
    addBooking,
    deleteBooking
}