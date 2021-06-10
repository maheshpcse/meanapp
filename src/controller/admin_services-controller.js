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

// GET all beauticians - API
const getAllBeauticians = async (request, response, next) => {
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
            status
        } = request.body;
        page = (Number(page) - 1) * Number(limit);
        let whereRaw = `(u.fullname LIKE '%${query}%' OR u.username LIKE '%${query}%' OR u.email LIKE '%${query}%' OR u.mobile LIKE '%${query}%' OR u.username LIKE '%${query}%')`;
        if (status === 0 || status === 1) {
            whereRaw += ` AND (u.status=${status})`;
        }
        // GET data list
        await USERS.query()
            .select('u.*')
            .alias('u')
            .whereRaw(`${whereRaw} AND u.role='beautician'`)
            .limit(limit)
            .offset(page)
            .then(async data => {
                console.log('Get all beauticians data isss', data);
                list = data;
            }).catch(listError => {
                throw listError;
            });
        // GET data list count
        await USERS.query()
            .count('* as totalBeauticians')
            .alias('u')
            .whereRaw(`${whereRaw} AND u.role='beautician'`)
            .then(async data => {
                console.log('Get all beauticians data count isss', data);
                count = data.length ? data[0].totalBeauticians : 0;
            }).catch(countError => {
                throw countError;
            });
        result = {
            success: true,
            error: false,
            statusCode: 200,
            message: 'Get all beauticians successful',
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

// ADD/UPDATE beautician - API
const addUpdateBeautician = async (request, response, next) => {
    console.log('Request body isss', request.body);
    let result = {};
    let message = '';
    try {
        const beauticianPayload = {
            user_id: request.body.user_id,
            fullname: request.body.fullname,
            username: request.body.username,
            email: request.body.email,
            password: request.body.password,
            mobile: request.body.mobile.toString(),
            profile: null,
            role: 'beautician',
            status: 1
        }
        let usersQuery = ``;
        if (!beauticianPayload.user_id) {
            usersQuery = USERS.query().insert(beauticianPayload);
        } else {
            usersQuery = USERS.query().update(beauticianPayload).whereRaw(`user_id=${beauticianPayload.user_id}`);
        }
        await usersQuery.then(async data => {
            result = {
                success: true,
                error: false,
                statusCode: 200,
                message: !beauticianPayload.user_id ? 'Add beautician successful' : 'Update beautician successful',
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

// DETELE/RESTORE beautician - API
const deleteRestoreBeautician = async (request, response, next) => {
    console.log('Request body isss', request.body);
    let result = {};
    let message = '';
    try {
        const beauticianPayload = {
            user_id: request.body.user_id,
            status: request.body.status
        }
        await USERS.query()
            .update(beauticianPayload)
            .whereRaw(`user_id=${beauticianPayload.user_id}`)
            .then(async data => {
                result = {
                    success: true,
                    error: false,
                    statusCode: 200,
                    message: beauticianPayload.status === 0 ? 'Delete beautician successful' : 'Restore beautician successful',
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

// ADD/UPDATE beauty parlour - API
const addUpdateBeautyParlour = async (request, response, next) => {
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

// ADD/UPDATE beauty services - API
const addUpdateBeautyServices = async (request, response, next) => {
    console.log('Request body isss', request.body);
    let result = {};
    let message = '';
    try {
        let { services, subservices } = request.body;
        await BEAUTY_SERVICES.transaction(async trx => {
            await BEAUTY_SERVICES.query().transacting(trx).insert(services).then(async data1 => {
                for (let item of subservices) {
                    item.main_service_id = data1['main_service_id'];
                    await BEAUTY_SUB_SERVICES.query().transacting(trx).insert(item).then(async data2 => {
                    }).catch(insertError1 => {
                        throw insertError1;
                    });
                }
                result = {
                    success: true,
                    error: false,
                    statusCode: 200,
                    message: 'Add beauty services successful',
                    data: data1
                }
            }).catch(insertError2 => {
                throw insertError2;
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

module.exports = {
    getAllBeautyServices,
    getAllBeauticians,
    addUpdateBeautician,
    deleteRestoreBeautician,
    addUpdateBeautyParlour,
    addUpdateBeautyServices
}