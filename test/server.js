/**
 * Created by Luiz Eduardo de Christo
 * May 30th, 2017
 */

var expect = require('chai').expect;
var request = require('request');

describe('GET /', function() {
  it('returns HTTP status 200', function(done) {
    request('http://localhost:4000', function(err, res, body) {
       console.log('verifying response...');
       console.log(res == null ? null : res.statusCode);
       if(res != null)
          expect(res.statusCode).to.equal(200);
        done();
      });
  });
});