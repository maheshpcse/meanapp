'use strict';

// require('./library/cronJob.js');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
var config = require('./config/config.js');
var routes = require('./routes/routes.js');
var Knexx = require('./config/knex.js');
const { Model } = require('objection');
Model.knex(Knexx.knex);

var app = express();

// Middleware functions
app.use(express.static(path.join(__dirname, '../public')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE,PATCH, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Origin, Authorization, x-access-token, Content-Length, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
});

app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/connect', (req, res) => {
    var connection = mysql.createConnection({
        host: config.database.host,
        port: config.database.port,
        user: config.database.username,
        password: config.database.password,
        database: config.database.db
    });
    connection.connect((err, data) => {
        if (err) {
            console.log('Error while db connection', err);
            res.status(200).json({
                success: false,
                error: true,
                message: 'Error while db connection',
                data: err
            });
        } else {
            console.log('Database connection success');
            res.status(200).json({
                success: true,
                error: false,
                message: 'Database connection success',
                data: null
            });
        }
    });
});

// Routes
app.use('/api', routes);

app.listen(config.server.port, (req, res) => {
    console.log(`Beautician server is listening on http://${config.server.host}:${config.server.port}`);
});

module.exports = app;