const express = require('express');
const router = express.Router();
const ibmController = require('../controllers/watson_controllers');


router.post('/newsession', ibmController.gerarToken);
router.post('/sendmessage', ibmController.sendMessage);
router.post('/incomingwatson', ibmController.incomingWatson);

module.exports = router;

