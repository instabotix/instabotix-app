const express = require('express');
const getProdById = require('../controllers/vtex_controllers');
const router = express.Router();
const ibmController = require('../controllers/watson_controllers');


router.post('/getprodbyid', getProdById );


module.exports = router;

