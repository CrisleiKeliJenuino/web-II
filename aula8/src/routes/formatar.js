const express = require('express')
const router = express.Router()
const formatarController = require('../controllers/formatarController')

router.post('/',formatarController.formatar)

module.exports = router