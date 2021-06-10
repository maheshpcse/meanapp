const MySqlDBDump =  require('mysqldump');
const cron = require('node-cron');
const moment = require('moment');
var CONFIG = require('../config/config.js');
const { resolve, reject } = require('bluebird');

backupDatabaseProcess();

async function backupDatabaseProcess() {
    try {
        await callCronJob().then(async result => {
            if (result.success) {
                console.log(result.message);
            }
        }).catch(getError => {
            throw getError;
        });
    } catch (error) {
        console.log('Error while backup the database', error);
    }
}

async function callCronJob() {
    return new Promise(async (resolve, reject) => {
        let response = {
            success: false,
            message: ''
        }
        try {
            await cron.schedule('*/5 * * * *', async () => {
                console.log(`Mysql database backup processing at ${moment().format('MMMM Do YYYY, h:mm:ss a')}`);
                // dump the result straight to a file
                await MySqlDBDump({
                    connection: {
                        host: CONFIG.database.host,
                        user: CONFIG.database.username,
                        password: CONFIG.database.password,
                        database: CONFIG.database.db,
                    },
                    dumpToFile: './dbbackup/beautician.sql',
                });
                response = {
                    success: true,
                    message: 'Backup database successfully done...'
                }
                resolve(response);
            });
        } catch (error) {
            throw error;
        }
    });
}