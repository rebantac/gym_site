const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')

router.get('/getId',userController.getCustomer)

router.post('/pushUser',userController.pushUser)

router.post('/pushUserGym',userController.registerGym)
// router.post('/generateUrl',userController.genQr)

module.exports = router