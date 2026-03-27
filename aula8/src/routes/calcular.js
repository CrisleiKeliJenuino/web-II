const express = require('express');
const router = express.Router();
const calcularController = require('../controllers/calcularController');

router.get('/', calcularController.calcular);

module.exports = router;