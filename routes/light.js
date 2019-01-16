
const express = require('express');
const path = require('path');

const lightController = require('../controllers/light');

const router = express.Router();

router.get('/', lightController.getIndex);

router.get('/status', lightController.getStatus);

module.exports = router;
