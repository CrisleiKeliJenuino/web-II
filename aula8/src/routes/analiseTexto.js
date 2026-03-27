const express = require('express')
const router = express.Router()
const analiseTextoController = require('../controllers/analiseTextoController')

router.post('/', analiseTextoController.analiseTexto)

module.exports = router
