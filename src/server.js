'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
var config = require('./config/config.js');
var routes = require('./routes/routes.js');
var Knexx = require('./config/knex.js');
const { Model } = require('objection');
Model.knex(Knexx.knex);

var app = express();

// var arr = [1,1,2,2,3,4,4,5,5,6,7,8,9,9];
// var obj = {};
// for(const item of arr) {
//     if(obj[item]) {
//         obj[item] = item;
//     } else {
//         obj[item] = item;
//     }
// }
// console.log('object isss', obj);

// var count = 0;
// var dupArr = null;
// var tempObj = {};
// for(const item of arr) {
//     if (obj.hasOwnProperty(item)) {
//         count += 1;
//         tempObj[item] = item;
//     }
//     if (count > 1) {
//         dupArr = Object.keys(tempObj);
//         count = 0;
//         tempObj = {};
//     }
// }
// console.log('duplicate array iss', dupArr);

// Middleware functions
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE,PATCH, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Origin, Authorization, x-access-token, Content-Length, X-Requested-With,Content-Type,Accept");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
});

// Routes
app.use('/api', routes);

app.listen(config.server.port, (req, res) => {
    console.log(`Mean app is listening on http://${config.server.host}:${config.server.port}`);
});

module.exports = app;