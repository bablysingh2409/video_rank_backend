
const express = require('express');
const router = express.Router();
const videoController = require('../controller/videoController');

router.get('/analyze', videoController.analyzeVideo);
router.post('/save', videoController.saveVideoDetails);

module.exports = router;
 