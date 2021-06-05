const _ = require('underscore');
const jwt = require('jsonwebtoken');
const CONFIG = require('../config/config.js');
const USERQUERY = require('../library/userquery');
const USERS = require('../model/Users-model');
const BOOKING = require('../model/Booking-model.js');
const BEAUTY_PARLOURS = require('../model/Beauty-parlours-model.js');
const BEAUTY_SERVICES = require('../model/Beauty_services-model.js');
const BEAUTY_SUB_SERVICES = require('../model/Beauty_sub_services-model.js');
const APPOINTMENT = require('../model/Appointment-model.js');
const REPORTS = require('../model/Report-model.js');
const { request, response } = require('express');

// GET report checkup details - API
const getCheckupDetails = async (request, response, next) => {
    
}

// GET all user reports
const getAllUserReportsById = async (request, response, next) => {
    console.log('Request body isss', request.body);
    let result = {};
    let message = '';
    let list = [];
    let count = 0;
    let mainData = [];
    try {
        let {
            limit,
            page,
            query,
            status,
            user_id
        } = request.body;
        page = (Number(page) - 1) * Number(limit);
        let whereRaw = `(bk.booking_id LIKE '%${query}%' OR bk.date LIKE '%${query}%' OR bk.time LIKE '%${query}%' OR bk.services LIKE '%${query}%' OR bp.beautician_name LIKE '%${query}%' OR bp.experience LIKE '%${query}%' OR bp.parlour_name LIKE '%${query}%' OR bp.law_firm_name LIKE '%${query}%' OR bp.place LIKE '%${query}%')`;
        if (status === 1 || status === 0) {
            whereRaw += ` AND (bk.booking_status=${Number(status)})`;
        }
        console.log('where condition isss', whereRaw);
        // GET data list
        await BOOKING.query()
            .select('bk.*', 'bp.beautician_id', 'bp.beautician_name', 'bp.experience', 'bp.parlour_name', 'bp.law_firm_name', 'bp.place', 'bp.rating', 're.*')
            .alias('bk')
            .innerJoin(`${BEAUTY_PARLOURS.tableName} as bp`, 'bp.beautician_id', 'bk.beautician_id')
            .innerJoin(`${REPORTS.tableName} as re`, 're.user_id', 'bk.user_id')
            .innerJoin(`${USERS.tableName} as u`, 'u.user_id', 're.user_id')
            .whereRaw(`bk.user_id=${user_id} AND ${whereRaw}`)
            .limit(limit)
            .offset(page)
            .then(async data => {
                console.log('Get all user reports data isss', data);
                list = data;
            }).catch(listError => {
                throw listError;
            });
        // GET data list count
        await BOOKING.query()
            .count('* as totalReports')
            .alias('bk')
            .innerJoin(`${BEAUTY_PARLOURS.tableName} as bp`, 'bp.beautician_id', 'bk.beautician_id')
            .innerJoin(`${REPORTS.tableName} as re`, 're.user_id', 'bk.user_id')
            .innerJoin(`${USERS.tableName} as u`, 'u.user_id', 're.user_id')
            .whereRaw(`bk.user_id=${user_id} AND ${whereRaw}`)
            .then(async data => {
                console.log('Get all user reports data count isss', data);
                count = data.length ? data[0].totalReports : 0;
            }).catch(countError => {
                throw countError;
            });
        result = {
            success: true,
            error: false,
            statusCode: 200,
            message: 'Get all user reports successful',
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

// ADD report - API
const addReport = async (request, response, next) => {
    console.log('Request body isss', request.body);
    let result = {};
    let message = '';
    try {
        // checking duplicate add user report
        await checkDuplicateAddUserReport(request).then(async duplicates => {
            console.log('Get dupllicates data isss', duplicates);
            if (duplicates.length !== 0) {
                message = 'Duplicate reports found';
                throw message;
            }
        }).catch(getError => {
            throw getError;
        });
        // ADD data list
        await REPORTS.query()
            .insert(request.body)
            .then(async data => {
                console.log('Add report data isss', data);
                result = {
                    success: true,
                    error: false,
                    statusCode: 200,
                    message: 'Add report data successful',
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

// UPDATE report checkup - API
const updateCheckup = async (request, response, next) => {
    console.log('Request body isss', request.body);
    let result = {};
    let message = '';
    try {
        // ADD data list
        await REPORTS.query()
            .update(request.body)
            .alias('re')
            .whereRaw(`re.appointment_id='${appointment_id}'`)
            .then(async data => {
                console.log('Update report data isss', data);
                result = {
                    success: true,
                    error: false,
                    statusCode: 200,
                    message: 'Update report data successful',
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

// check duplicate add user report
function checkDuplicateAddUserReport(request) {
    return new Promise(async(resolve, reject) => {
        try {
            const { appointment_id, user_id, date } = request.body;
            const whereRaw = `rp.appointment_id=${appointment_id} AND rp.user_id=${user_id} AND rp.date='${date}'`;
            await REPORTS.query()
                .select('rp.*')
                .alias('rp')
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

module.exports = {
    getCheckupDetails,
    getAllUserReportsById,
    addReport,
    updateCheckup
}