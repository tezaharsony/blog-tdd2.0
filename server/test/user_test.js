var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should()

chai.use(chaiHttp);

var id = null

describe('test user', ()=>{
  it('successfully create new user', function (done) {
    chai.request('http://localhost:3000')
    .post('/api/users')
    .send({
      username: 'user',
      password: 'test'
    })
    .end((err,res) => {
      res.should.have.status(200)
      res.body.username.should.equal('user')
      res.body.should.have.property('_id')
      res.body.should.have.property('username')
      res.body.should.have.property('password')
      res.body._id.should.be.a('String')
      res.body.username.should.be.a('String')
      res.body.password.should.be.a('String')
      id = res.body._id
      done()
    })
  })

  it('successfully read all users', function (done) {
    chai.request('http://localhost:3000')
    .get('/api/users')
    .end((err,res) => {
      res.should.have.status(200)
      done()
    })
  })

  it('successfully read user by id', function (done) {
    chai.request('http://localhost:3000')
    .get(`/api/users/${id}`)
    .end((err,res) => {
      res.should.have.status(200)
      done()
    })
  })

  it('successfully delete user', function(done) {
    chai.request('http://localhost:3000')
    .delete(`/api/users/${id}`)
    .end((err,res) =>{
      res.should.have.status(200)
      res.body.should.not.have.property('_id')
      res.body.should.not.have.property('username')
      res.body.should.not.have.property('password')
      done()
    })
  })

})
