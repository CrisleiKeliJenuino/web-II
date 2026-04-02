const express = require('express');
const router = express.Router();
const erroController = require('../controllers/erroController');

router.get('/',erroController.erro);

module.exports = router;