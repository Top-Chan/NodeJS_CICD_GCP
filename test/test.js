var request = require('supertest');
var app = require('../server.js');
describe('GET /', function() {
 it('respond with Hello world', function(done) {
 request(app).get('/').expect('Hello world', done);
 });
});
