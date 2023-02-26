const express = require('express')
const router = express.Router()
const gymcontroller = require('../controller/gymController')

router.post('/getId',gymcontroller.getGymId)

router.post('/pushGym',gymcontroller.pushGym)

router.get('/',gymcontroller.getShortGymDetail)

router.post('/getGymById',gymcontroller.getGymById)

module.exports = router