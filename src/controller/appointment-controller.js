const _ = require('underscore');
const jwt = require('jsonwebtoken');
const CONFIG = require('../config/config.js');
const USERQUERY = require('../library/userquery');
const USERS = require('../model/Users-model');
const BOOKING = require('../model/Booking-model.js');
const BEAUTY_PARLOURS = require('../model/Beauty-parlours-model.js');
const APPOINTMENT = require('../model/Appointment-model.js');

// ADD appointment - API
const addAppointment = async (request, response, next) => {
    console.log('Request body isss', request.body);
    let result = {};
    let message = '';
    try {
        // ADD data list
        await APPOINTMENT.query()
            .insert(request.body)
            .then(async data => {
                console.log('Add appointment data isss', data);
                result = {
                    success: true,
                    error: false,
                    statusCode: 200,
                    message: 'Add appointment data successful',
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

// UPDATE appointment - API
const updateAppointment = async (request, response, next) => {
    console.log('Request body isss', request.body);
    let result = {};
    let message = '';
    try {
        let { appointment_id } = request.body;
        // ADD data list
        await APPOINTMENT.query()
            .update(request.body)
            .alias('ap')
            .whereRaw(`ap.appointment_id='${appointment_id}'`)
            .then(async data => {
                console.log('Update appointment data isss', data);
                result = {
                    success: true,
                    error: false,
                    statusCode: 200,
                    message: 'Update appointment data successful',
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

// DELETE appointment by Id - API
const deleteAppointment = async (request, response, next) => {
    console.log('Request body isss', request.body);
    let result = {};
    let message = '';
    try {
        let { appointment_id, status } = request.body;
        // DELETE data list
        await APPOINTMENT.query()
            .del()
            .alias('ap')
            .whereRaw(`ap.appointment_id='${appointment_id}'`)
            .then(async data => {
                console.log('Delete appointment data isss', data);
                result = {
                    success: true,
                    error: false,
                    statusCode: 200,
                    message: 'Delete appointment data successful',
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

module.exports = {
    addAppointment,
    updateAppointment,
    deleteAppointment
}