var modelArticle = require ('../models/modelsArticle')


var createArticle = function (req, res){
    var Article = new modelArticle({
    title : req.body.title,
    content : req.body.content
  })
  Article.save(function(err,data){
    if(!err){
      res.send(data)
    } else {
      res.send(err)
    }
  })
}

var findAllArticle = function (req,res){
  modelArticle.find({}, function(err,article){
    if(!err) {
      res.send(article)
    } else {
      res.send(err)
    }
  });
}

var findIdArticle = function (req,res){
  modelArticle.findById({_id:req.params.id}, function(err,article){
    if(!err) {
      res.send(article)
    } else {
      res.send(err)
    }
  });
}

var updateArticle = function (req, res){
  modelArticle.findByIdAndUpdate({
    _id : req.params.id
  },{
    title : req.body.title,
    content : req.body.content
  },{
    new: true
  })
  .then(data => {
    res.send(data)
  })
  .catch(err =>{
    res.send(err)
  })
}

var deleteArticle = function (req, res){
  modelArticle.remove({_id: req.params.id}, function (err){
    if (!err) {
      res.send("data deleted")
    } else {
      res.send(err)
    }
  })
}

module.exports = {
  createArticle,
  findAllArticle,
  updateArticle,
  deleteArticle,
  findIdArticle
};
