const express = require('express')
const router = express.Router()
const validarUsuarioController = require('../controllers/validarUsuarioController')

router.post('/',validarUsuarioController.validarUsuario)

module.exports = router