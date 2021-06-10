const _ = require('underscore');
const jwt = require('jsonwebtoken');
const CONFIG = require('../config/config.js');
const USERQUERY = require('../library/userquery');
const USERS = require('../model/Users-model');
const BOOKING = require('../model/Booking-model.js');
const BEAUTY_PARLOURS = require('../model/Beauty-parlours-model.js');
const BEAUTY_SERVICES = require('../model/Beauty_services-model.js');
const BEAUTY_SUB_SERVICES = require('../model/Beauty_sub_services-model.js');

// GET all beauty parlours - API
const getAllBeautyParlours = async (request, response, next) => {
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
            status
        } = request.body;
        page = (Number(page) - 1) * Number(limit);
        let whereRaw = `(bt.beautician_name LIKE '%${query}%' OR bt.experience LIKE '%${query}%' OR bt.parlour_name LIKE '%${query}%' OR bt.place LIKE '%${query}%' OR bt.rating LIKE '%${query}%')`;
        if (status === 1 || status === 0) {
            whereRaw += ` AND (bt.status=${Number(status)})`;
        }
        console.log('where condition isss', whereRaw);
        // GET data list
        await BEAUTY_PARLOURS.query()
            .select('bt.*')
            .alias('bt')
            .whereRaw(whereRaw)
            .limit(limit)
            .offset(page)
            .then(async data => {
                console.log('Get all user beauticians data isss', data);
                list = data;
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
                const beautyList = [];
                for (let item of list) {
                    beautyList.push(JSON.parse(item.services));
                }
                console.log(beautyList);
                const mainServices = mainData[0];
                const servicesObj = mainData[1];
                let finalObj = {};
                // let finalArry= [];
                let INDEX = 0;
                for (let data of beautyList) {
                    finalObj = {};
                    for (let keys of Object.keys(data)) {
                        if (servicesObj[keys]) {
                            const id = _.pluck(mainServices, 'main_service_id').indexOf(Number(keys));
                            const keyName = mainServices[id].service_name;
                            finalObj[keyName] = [];
                            for (let item of data[keys]) {
                                const pos = _.pluck(servicesObj[keys], 'sub_service_id').indexOf(Number(item));
                                finalObj[keyName].push(servicesObj[keys][pos]);
                            }
                        }
                    }
                    // finalArry.push(finalObj);
                    list[INDEX]['servicesList'] = finalObj;
                    INDEX += 1;
                }
                // console.log('final array isss', finalArry);
            }).catch(listError => {
                throw listError;
            });
        // GET data list count
        await BEAUTY_PARLOURS.query()
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

// GET all users for dropdrown - API
const getAllUsers = async (request, response, next) => {
    console.log('Request body isss', request.body);
    let result = {};
    let message = '';
    try {
        // GET data list
        await USERS.query()
            .select('u.user_id', 'u.fullname', 'u.username', 'u.role', 'u.status')
            .alias('u')
            .whereRaw(`u.role='beautician'`)
            .then(async data => {
                console.log('Get all users list isss', data);
                result = {
                    success: true,
                    error: false,
                    statusCode: 200,
                    message: 'Get all users list successful',
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

module.exports = {
    getAllBeautyParlours,
    getAllUsers
}