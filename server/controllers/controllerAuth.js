var authModel = require('../models/modelsUser');
var bcrypt = require ('bcryptjs')
var jwt = require ('jsonwebtoken')

var login = function (req, res) {
  authModel.findOne({username : req.body.username}, function(err, user){
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        let token = jwt.sign({
          id: user._id,
          username: user.username
        }, "kantal")
        res.send(token)
      } else {
        res.send('please type your correct password')
      }
    } else {
      res.send('cannot find username')
    }
  });
}

module.exports = { login };
