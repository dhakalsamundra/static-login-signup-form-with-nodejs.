const express = require('express');
const route = express.Router();

//get request
route.get('/', (req, res) =>res.render('homepage'));

module.exports = route;