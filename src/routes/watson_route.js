const express = require('express');
const router = express.Router();
const watsonCtrl = require('../controllers/watson_controllers');


router.post('/newsession', watsonCtrl.firstContact);
// router.post('/sendmessage', ibmController.sendMessage);
// router.post('/incomingwatson', ibmController.incomingWatson);

module.exports = router;

