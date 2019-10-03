const express = require('express');
const router = express.Router();

const API = require('../controllers/API');

module.exports = app =>{

router.get('/', API.index);

router.post('/execute', API.execute);



app.use(router);
};