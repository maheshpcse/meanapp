const MySqlDBDump =  require('mysqldump');
const cron = require('node-cron');
const moment = require('moment');
var CONFIG = require('../config/config.js');

cron.schedule('*/5 * * * *', () => {
    console.log(`Mysql database backup processing at ${moment().format('MMMM Do YYYY, h:mm:ss a')}`);
    // dump the result straight to a file
    MySqlDBDump({
        connection: {
            host: CONFIG.database.host,
            user: CONFIG.database.username,
            password: CONFIG.database.password,
            database: CONFIG.database.db,
        },
        dumpToFile: './dbbackup/beautician.sql',
    });
    setTimeout(() => {
        console.log('Backup database successfully done...');
    }, 5000);
});