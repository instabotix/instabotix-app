const express = require('express');
const router = express.Router();
const commentMonitor = require('../functions/lookup_bot');


router.post('/monitor', commentMonitor );


module.exports = router;

 