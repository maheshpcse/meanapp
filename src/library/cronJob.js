const MySqlDBDump =  require('mysqldump');
const cron = require('node-cron');
const moment = require('moment');
var CONFIG = require('../config/config.js');

backupDatabaseProcess();

async function backupDatabaseProcess() {
    try {
        await cron.schedule('*/5 * * * *', async () => {
            console.log(`Mysql database backup processing at ${moment().format('MMMM Do YYYY, h:mm:ss a')}`);
            // dump the result straight to a file
            await MySqlDBDump({
                connection: {
                    host: CONFIG.database.host,
                    port: CONFIG.database.port,
                    user: CONFIG.database.username,
                    password: CONFIG.database.password,
                    database: CONFIG.database.db,
                },
                dumpToFile: './dbbackup/beautician.sql',
            });
            setTimeout(() => {
                console.log(`Backup ${CONFIG.database.db} database successful`);
            }, 5000);
        });
    } catch (error) {
        console.log('Error while backup the database', error);
    }
}