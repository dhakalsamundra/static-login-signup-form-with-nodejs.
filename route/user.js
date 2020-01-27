const express = require('express');
const route = express.Router();

//get request
route.get('/homepage', (req, res) =>res.render('homepage'));
route.get('/signup', (req, res) =>res.render('signup'));

module.exports = route;