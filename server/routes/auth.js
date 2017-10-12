const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllerAuth')

router.post('/', controllers.login)


module.exports = router
