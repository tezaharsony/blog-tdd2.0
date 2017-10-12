var express = require('express');
var router = express.Router();
var controllers = require ('../controllers/controllerUser')

router.post('/',controllers.createUser)
router.get('/',controllers.readAllUsers)
router.get('/:id',controllers.userById)
router.delete('/:id',controllers.removeUser)

module.exports = router;
