const config = require('../../../../config');
const express = require('express');

var userRoutes = express.Router();

userRoutes.post('/create', require('./create'))

module.exports = userRoutes;