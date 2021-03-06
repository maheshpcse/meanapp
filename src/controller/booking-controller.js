const _ = require('underscore');
const jwt = require('jsonwebtoken');
const randomstring = require("randomstring");
const CONFIG = require('../config/config.js');
const USERQUERY = require('../library/userquery');
const USERS = require('../model/Users-model');
const BOOKING = require('../model/Booking-model.js');
const BEAUTY_PARLOURS = require('../model/Beauty-parlours-model.js');
const APPOINTMENT = require('../model/Appointment-model.js');
const {
    resolve,
    reject
} = require('bluebird');
const moment = require('moment');

// GET all user bookings - API
const getAllUserBookings = async (request, response, next) => {
    console.log('Request body isss', request.body);
    let result = {};
    let message = '';
    let list = [];
    let count = 0;
    try {
        let {
            limit,
            page,
            query,
            status,
            user_id
        } = request.body;
        page = (Number(page) - 1) * Number(limit);
        // let whereRaw = `(bk.booking_id LIKE '%${query}%' OR bk.law_firm_name LIKE '%${query}%' OR bk.date LIKE '%${query}%' OR bk.time LIKE '%${query}%' OR bt.beautician_name LIKE '%${query}%' OR u.fullname LIKE '%${query}%' OR u.username LIKE '%${query}%')`;
        let whereRaw = `(bk.booking_id LIKE '%${query}%' OR bk.law_firm_name LIKE '%${query}%' OR bk.time LIKE '%${query}%' OR bt.beautician_name LIKE '%${query}%' OR u.fullname LIKE '%${query}%' OR u.username LIKE '%${query}%')`;
        if (status === 0 || status === 1) {
            whereRaw += ` AND (bk.booking_status=${status})`;
        }
        // GET data list
        await BEAUTY_PARLOURS.query()
            .select('u.user_id', 'u.fullname', 'u.username', 'bt.*', 'bk.*')
            .alias('bt')
            .innerJoin(`${BOOKING.tableName} AS bk`, 'bk.beautician_id', 'bt.beautician_id')
            // .innerJoin(`${APPOINTMENT.tableName} AS ap`, 'ap.user_id', 'bk.user_id')
            .innerJoin(`${USERS.tableName} AS u`, 'u.user_id', 'bk.user_id')
            .whereRaw(whereRaw + ` AND (bt.owner_id=${user_id})`)
            .limit(limit)
            .offset(page)
            .then(async data => {
                console.log('Get all user bookings data isss', data);
                list = data;
            }).catch(listError => {
                throw listError;
            });
        // GET data list count
        await BEAUTY_PARLOURS.query()
            .count('* as totalBookings')
            .alias('bt')
            .innerJoin(`${BOOKING.tableName} AS bk`, 'bk.beautician_id', 'bt.beautician_id')
            // .innerJoin(`${APPOINTMENT.tableName} AS ap`, 'ap.user_id', 'bk.user_id')
            .innerJoin(`${USERS.tableName} AS u`, 'u.user_id', 'bk.user_id')
            .whereRaw(whereRaw + ` AND (bt.owner_id=${user_id}) AND (bk.booking_status!=2)`)
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

// GET all user appointments - API
const getAllUserAppointments = async (request, response, next) => {
    console.log('Request body isss', request.body);
    let result = {};
    let message = '';
    let list = [];
    let count = 0;
    try {
        let {
            limit,
            page,
            query,
            status,
            user_id
        } = request.body;
        page = (Number(page) - 1) * Number(limit);
        // let whereRaw = `(bk.booking_id LIKE '%${query}%' OR bk.law_firm_name LIKE '%${query}%' OR bk.date LIKE '%${query}%' OR bk.time LIKE '%${query}%' OR bt.beautician_name LIKE '%${query}%' OR u.fullname LIKE '%${query}%' OR u.username LIKE '%${query}%')`;
        let whereRaw = `(bk.booking_id LIKE '%${query}%' OR bk.law_firm_name LIKE '%${query}%' OR bk.time LIKE '%${query}%' OR bt.beautician_name LIKE '%${query}%' OR u.fullname LIKE '%${query}%' OR u.username LIKE '%${query}%')`;
        if (status === 0 || status === 1) {
            whereRaw += ` AND (bk.booking_status=${status})`;
        }
        const dateTimeWhere = ` AND (bk.date='${moment().format('YYYY-MM-DD')}' AND (bk.time='${moment().format('HH:MM:ss')}' OR '${moment().format('HH:MM:ss')}'>bk.time))`;
        console.log('date time where isss', dateTimeWhere);
        // GET data list
        await BEAUTY_PARLOURS.query()
            .select('u.user_id', 'u.fullname', 'u.username', 'bt.*', 'bk.*', 'ap.*')
            .alias('bt')
            .innerJoin(`${BOOKING.tableName} AS bk`, 'bk.beautician_id', 'bt.beautician_id')
            .innerJoin(`${APPOINTMENT.tableName} AS ap`, 'ap.user_id', 'bk.user_id')
            .innerJoin(`${USERS.tableName} AS u`, 'u.user_id', 'ap.user_id')
            .whereRaw(whereRaw + ` AND (bt.owner_id=${user_id})` + dateTimeWhere)
            .limit(limit)
            .offset(page)
            .then(async data => {
                console.log('Get all user appointments data isss', data);
                list = data;
            }).catch(listError => {
                throw listError;
            });
        // GET data list count
        await BEAUTY_PARLOURS.query()
            .count('* as totalBookings')
            .alias('bt')
            .innerJoin(`${BOOKING.tableName} AS bk`, 'bk.beautician_id', 'bt.beautician_id')
            .innerJoin(`${APPOINTMENT.tableName} AS ap`, 'ap.user_id', 'bk.user_id')
            .innerJoin(`${USERS.tableName} AS u`, 'u.user_id', 'ap.user_id')
            .whereRaw(whereRaw + ` AND (bt.owner_id=${user_id}) AND (bk.booking_status!=2)` + dateTimeWhere)
            .then(async data => {
                console.log('Get all user appointments data count isss', data);
                count = data.length ? data[0].totalBookings : 0;
            }).catch(countError => {
                throw countError;
            });
        result = {
            success: true,
            error: false,
            statusCode: 200,
            message: 'Get all user appointments successful',
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
        let {
            limit,
            page,
            query,
            beautician_id
        } = request.body;
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
        let {
            booking_id
        } = request.body;
        // GET data list
        await BOOKING.query()
            .select('bk.*', 'bt.*')
            .alias('bk')
            .innerJoin(`${BEAUTICIANS.tableName} AS bt`, 'bt.beautician_id', 'bk.beautician_id')
            .whereRaw(`bk.book_id=${booking_id}`)
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
        let {
            booking_id,
            booking_status,
            user_id,
            date,
            description,
            services,
            amounts,
            issued_by
        } = request.body;
        // UPDATE data list
        await BOOKING.transaction(async trx => {
            await BOOKING.query()
                .transacting(trx)
                .update({
                    booking_status: Number(booking_status)
                })
                .alias('bk')
                .whereRaw(`bk.book_id=${booking_id}`)
                .then(async data => {
                    console.log('Update booking status by Id isss', data);
                    if (booking_status == 1) {
                        const appointmentPayload = {
                            appointment_id: `#${moment().format('YYYYMMDDHHMMss')}`,
                            user_id: Number(user_id),
                            date: moment().format('YYYY-MM-DD'),
                            description: description,
                            services: services,
                            amounts: amounts,
                            issued_by: issued_by,
                            status: 1
                        }
                        // ADD data list
                        await APPOINTMENT.query()
                            .transacting(trx)
                            .insert(appointmentPayload)
                            .then(async data => {
                                console.log('Add appointment data isss', data);
                            }).catch(addError => {
                                throw addError;
                            });
                    }
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
        }).catch(trxError => {
            throw trxError;
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
        // checking duplicate user bookings
        await checkDuplicateUserBooking(request).then(async duplicates => {
            console.log('Get duplicate data response isss', duplicates);
            if (duplicates.length !== 0) {
                message = 'Duplicate bookings found';
                throw message;
            }
        }).catch(getError => {
            throw getError;
        });
        // checking user booking validity
        await checkUserBookingValidity(request).then(async resultUsers => {
            console.log('Get user booing validity response isss', resultUsers);
            if (resultUsers.success) {
                message = resultUsers.message;
                throw message;
            }
        }).catch(getError => {
            throw getError;
        });
        delete request.body.users_limit;
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
        let {
            booking_id,
            booking_status
        } = request.body;
        // DELETE data list
        await BOOKING.query()
            .del()
            .alias('bk')
            .whereRaw(`bk.book_id=${booking_id}`)
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

// GET all users by beautician - API

// generate user booking id
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

// check duplicate user booking
function checkDuplicateUserBooking(request) {
    return new Promise(async (resolve, reject) => {
        try {
            const {
                user_id,
                beautician_id,
                date
            } = request.body;
            const whereRaw = `bk.user_id=${user_id} AND bk.beautician_id=${beautician_id} AND bk.date='${date}' AND (bk.booking_status=1 OR bk.booking_status=2)`;
            await BOOKING.query()
                .select('bk.*')
                .alias('bk')
                .whereRaw(whereRaw)
                .then(async data => {
                    console.log('duplicate date isss', data);
                    resolve(data);
                }).catch(getError => {
                    throw getError;
                });
        } catch (error) {
            throw error;
        }
    });
}

// check user booking validaity
function checkUserBookingValidity(request) {
    return new Promise(async (resolve, reject) => {
        let response = {
            success: false,
            message: ''
        };
        try {
            const {
                user_id,
                beautician_id,
                date,
                time,
                users_limit,
                booking_status
            } = request.body;
            // check users limit in beauty parlours
            // await BEAUTY_PARLOURS.query()
            //     .select('bp.*')
            //     .alias('bp')
            //     .whereRaw(`bp.beautician_id=${beautician_id}`)
            //     .then(async data => {
            //         console.log('Get beauty parlours data by id isss', data);
            //     }).catch(getError => {
            //         throw getError;
            //     });
            await BOOKING.query()
                .select('bk.*')
                .alias('bk')
                .whereRaw(`bk.beautician_id=${beautician_id} AND bk.date='${date}' AND bk.booking_status=1`)
                .then(async data => {
                    console.log('Get user bookings data by userid', data);
                    if (data.length >= Number(users_limit)) {
                        response = {
                            success: true,
                            message: 'User bookings limit is reached.'
                        }
                    }
                }).catch(getError => {
                    throw getError;
                });
            // checking if user is already book another parlour by same date and time or not
            await BOOKING.query()
                .select('bk.*')
                .alias('bk')
                .whereRaw(`bk.user_id=${user_id} AND bk.date='${date}' AND bk.time='${time}' AND bk.booking_status=1`)
                .then(async data => {
                    console.log('Get user bookings to another parlours data by userid', data);
                    if (data.length !== 0) {
                        response = {
                            success: true,
                            message: 'User is already booked for another parlour in same time.'
                        }
                    }
                }).catch(getError => {
                    throw getError;
                });
            // checking if user book an appointment in b/w start time and end time or not
            await BEAUTY_PARLOURS.query()
                .select('bp.*')
                .alias('bp')
                .whereRaw(`bp.beautician_id=${beautician_id} AND '${time}' BETWEEN bp.start_time and bp.end_time`)
                .then(async data => {
                    console.log('Get beauty parlours data by beautician id isss', data);
                    if (data.length === 0) {
                        response = {
                            success: true,
                            message: 'Please book an appointment in b/w parlour service timings only.'
                        }
                    }
                }).catch(getError => {
                    throw getError;
                });
            resolve(response);
        } catch (error) {
            throw error;
        }
    });
}

module.exports = {
    getAllUserBookings,
    getAllUserAppointments,
    getBookingsByBeautician,
    getBookingById,
    updateBookingStatusById,
    addBooking,
    deleteBooking
}