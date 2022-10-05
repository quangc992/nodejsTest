const router = require('express').Router()

const homeController = require('../controller/homeController')

router.get('/home', homeController.home)

module.exports = router