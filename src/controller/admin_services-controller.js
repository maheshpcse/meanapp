const _ = require('underscore');
const jwt = require('jsonwebtoken');
const randomstring = require("randomstring");
const multer = require('multer');
const CONFIG = require('../config/config.js');
const USERQUERY = require('../library/userquery');
const USERS = require('../model/Users-model');
const BOOKING = require('../model/Booking-model.js');
const BEAUTY_PARLOURS = require('../model/Beauty-parlours-model.js');
const BEAUTY_SERVICES = require('../model/Beauty_services-model.js');
const BEAUTY_SUB_SERVICES = require('../model/Beauty_sub_services-model.js');
const BEAUTY_SERVICE_WORKERS = require('../model/Beauty_service_workers-model.js');

// FILE UPLOAD with multer configuration
var DIR = './src/uploads/';
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, DIR)
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname)
    }
});
var upload = multer({ storage: storage }).single('file');

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
    let services = [];
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
            .select('u.*', 'bsw.*')
            .alias('u')
            .innerJoin(`${BEAUTY_SERVICE_WORKERS.tableName} AS bsw`, 'bsw.owner_id', 'u.user_id')
            .whereRaw(`${whereRaw} AND u.role='beautician'`)
            .limit(limit)
            .offset(page)
            .then(async data => {
                console.log('Get all beauticians data isss', data);
                list = data;
                await BEAUTY_SUB_SERVICES.query()
                    .select('bss.*', 'bss.sub_service_id as id', 'bss.sub_service_name as itemName')
                    .alias('bss')
                    .then(async data1 => {
                        console.log('Get all sub services data isss', data1);
                        services = data1;
                    }).catch(getError => {
                        throw getError;
                    });
                const groupByServices = _.groupBy(services, 'main_service_id');
                let index = 0;
                for (let item of list) {
                    item.subservices = [];
                    for (const item of Object.keys(groupByServices)) {
                        list[index].subservices.push([]);
                    }
                    index += 1;
                }
                let id = 0;
                for (let item of list) {
                    const arr = _.sortBy(item.services.split(','));
                    const tempArr = _.pluck(services, 'sub_service_id');
                    for (const num of arr) {
                        var pos = tempArr.indexOf(Number(num));
                        for (const data of Object.values(groupByServices)) {
                            const values = _.pluck(data, 'sub_service_id');
                            if (values.includes(Number(num))) {
                                var place = Object.values(groupByServices).indexOf(data);
                                list[id].subservices[place].push(services[pos]);
                            }
                        }
                    }
                    id += 1;
                }
            }).catch(listError => {
                throw listError;
            });
        // GET data list count
        await USERS.query()
            .count('* as totalBeauticians')
            .alias('u')
            .innerJoin(`${BEAUTY_SERVICE_WORKERS.tableName} AS bsw`, 'bsw.owner_id', 'u.user_id')
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
        let { users, workers } = request.body;
        let usersQuery = ``;
        // start transaction to insert/update beautician data
        await USERS.transaction(async trx => {
            // // UPLOAD A USER PROFILE HERE
            // await upload(request, response, async (err, data) => {
            //     console.log('file extension is:', request.file);
            //     // console.log('file extension is:', request.file.originalname.split('.')[1]);
            //     if (!request.file) {
            //         message = 'No file received';
            //     }
            //     else if (err) {
            //         message = 'Error while uploading a file';
            //     } else {
                      // var profileName = request.file.filename;
                      // var profilePath = `http://${CONFIG.server.host}:${CONFIG.server.port}` + request.file.path;
                      // users.profile = profilePath;
            //     }
            // });
            if (!users.user_id) {
                usersQuery = USERS.query().transacting(trx).insert(users);
            } else {
                usersQuery = USERS.query().transacting(trx).update(users).whereRaw(`user_id=${users.user_id}`);
            }
            await usersQuery.then(async data => {
                workers.owner_id = data['user_id'];
                if (!workers.worker_id) {
                    workersQuery = BEAUTY_SERVICE_WORKERS.query().transacting(trx).insert(workers);
                } else {
                    workersQuery = BEAUTY_SERVICE_WORKERS.query().transacting(trx).update(workers).whereRaw(`worker_id=${workers.worker_id}`);
                }
                await workersQuery.then(async data1 => {
                    result = {
                        success: true,
                        error: false,
                        statusCode: 200,
                        message: !users.user_id ? 'Add beautician successful' : 'Update beautician successful',
                        data: {
                            data,
                            data1
                        }
                    }
                }).catch(insertError => {
                    throw insertError;
                });
            }).catch(insertError1 => {
                throw insertError1;
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