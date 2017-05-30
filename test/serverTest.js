/**
 * Created by Luiz Eduardo de Christo
 * May 30th, 2017
 */
var server = ('../server');

describe('server', function() {
    beforeEach(function() {
      server.listen(4000);
    });
});

describe('server', function() {
    afterEach(function() {
        server.close();
    });
});

var assert = require('assert');
var http = require('http');

describe('/', function() {
   it('should return HTTP 200', function(done) {
       http.get('http://localhost:4000', function(res) {
           assert.equal(200, res.statusCode);
           done();
       });
   });
});