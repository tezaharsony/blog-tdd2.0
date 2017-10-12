const jwt = require('jsonwebtoken')

var auth = (req, res, next) =>
{
  if(req.headers.hasOwnProperty('token')){
    var decoded = jwt.verify(req.headers.token, "kantal");
    {
      req.headers.authentic = decoded
      next()
    }
  }
  else {
    res.send('you should login')
  }
}

var isAdmin = (req, res, next) => {
  jwt.verify(req.headers.token, "kantal", function (err, result) {
    if (!err){
      if (result.role == 'admin') {
        next()
      } else {
        res.send('you are not admin')
      }
    } else {
      res.send (err)
    }
  });
}


module.exports = {
  auth,
  isAdmin
};
