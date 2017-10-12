var express = require('express');
var router = express.Router();
var verify = require ('../helpers/verify')
var controllers = require ('../controllers/controllerArticle')

router.post('/',controllers.createArticle )
router.get('/',controllers.findAllArticle)
router.get('/:id',controllers.findIdArticle)
router.put('/:id',controllers.updateArticle)
router.delete('/:id',controllers.deleteArticle)

module.exports = router;
