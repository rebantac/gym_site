const express = require('express')
const router = express.Router()
const gymcontroller = require('../controller/gymController')

router.get('/getId',gymcontroller.getGymId)

router.post('/pushGym',gymcontroller.pushGym)

router.get('/',gymcontroller.getShortGymDetail)

module.exports = router