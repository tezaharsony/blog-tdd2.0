var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should()

chai.use(chaiHttp);

var id = null

describe('test blog', ()=>{
  it('successfully create new article', function (done) {
    chai.request('http://localhost:3000')
    .post('/api/articles')
    .send({
      title: 'test post blog',
      content: 'this is just test using mocha and chai'
    })
    .end((err,res) => {
      res.should.have.status(200)
      res.body.title.should.equal('test post blog')
      res.body.content.should.equal('this is just test using mocha and chai')
      res.body.should.have.property('_id')
      res.body.should.have.property('title')
      res.body.should.have.property('content')
      res.body.title.should.be.a('String')
      res.body.content.should.be.a('String')
      res.body._id.should.be.a('String')
      id = res.body._id
      done()
    })
  })

  it('successfully read all articles', function (done) {
    chai.request('http://localhost:3000')
    .get('/api/articles')
    .end((err,res) => {
      res.should.have.status(200)
      done()
    })
  })

  it('successfully update article', function (done) {
    chai.request('http://localhost:3000')
    .put(`/api/articles/${id}`)
    .send({
      title: 'test post blog and update blog',
      content: 'this is just test and update using mocha and chai'
    })
    .end((err,res) =>{
      res.should.have.status(200)
      res.body.title.should.equal('test post blog and update blog')
      res.body.content.should.equal('this is just test and update using mocha and chai')
      res.body.should.have.property('_id')
      res.body.should.have.property('title')
      res.body.should.have.property('content')
      res.body.title.should.be.a('String')
      res.body.content.should.be.a('String')
      res.body._id.should.be.a('String')
      done()
    })
  })

  it('successfully delete article', function(done) {
    chai.request('http://localhost:3000')
    .delete(`/api/articles/${id}`)
    .end((err,res) =>{
      res.should.have.status(200)
      res.body.should.not.have.property('_id')
      res.body.should.not.have.property('title')
      res.body.should.not.have.property('content')
      done()
    })
  })

})
