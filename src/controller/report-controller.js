const _ = require('underscore');
const jwt = require('jsonwebtoken');
const CONFIG = require('../config/config.js');
const USERQUERY = require('../library/userquery');
const USERS = require('../model/Users-model');
const BOOKING = require('../model/Booking-model.js');
const BEAUTY_PARLOURS = require('../model/Beauty-parlours-model.js');
const APPOINTMENT = require('../model/Appointment-model.js');
const REPORTS = require('../model/Report-model.js');
const { request, response } = require('express');

// GET report checkup details - API
const getCheckupDetails = async (request, response, next) => {
    
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
    addReport,
    updateCheckup
}