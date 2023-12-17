
const express = require('express');
const router = express.Router();
const callbackController = require('../controller/callbackController');

router.post('/request', callbackController.requestCallback);

module.exports = router;
   