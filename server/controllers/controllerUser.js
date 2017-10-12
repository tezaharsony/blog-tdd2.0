var modelUser = require ('../models/modelsUser')
var bcrypt = require ('bcryptjs')

var createUser = function(req, res) {
  var salt = bcrypt.genSaltSync(10);
  var password = bcrypt.hashSync(req.body.password, salt);

  let newUser = new modelUser({
    username: req.body.username,
    password: password,
    createdAt: new Date()
  })
  newUser.save((err, user) => {
    if(err) {
      res.send(err)
    } else {
      res.send(user)
    }
  })
}

var readAllUsers = function (req, res) {
  modelUser.find(function (err, users){
    if (!err) {
      res.send (users)
    } else {
      res.send (err)
    }
  })
}

var userById = function(req, res) {
  modelUser.find({_id: req.params.id}, (err, user) => {
    if (!err) {
      res.send (user)
    } else {
      res.send (err)
    }
  })
}

var removeUser = function(req, res) {
  modelUser.findOneAndRemove({_id: req.params.id}, (err, user) => {
    if(err) res.send(err)
    res.send("data deleted")
  })
}

module.exports = {
  createUser,
  readAllUsers,
  removeUser,
  userById
}
