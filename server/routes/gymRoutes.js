const express = require('express')
const router = express.Router()
const gymcontroller = require('../controller/gymController')

router.post('/pushGym',gymcontroller.pushGym)

module.exports = router