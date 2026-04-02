const express = require('express');
const router = express.Router();
const classificarController = require('../controllers/classificarController');

router.post('/', classificarController.classificar);

module.exports = router;