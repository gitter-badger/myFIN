/**
 * Created by Luiz Eduardo de Christo
 * May 30th, 2017
 */

var expect = require("chai").expect;
var request = require('request');

describe('GET /', function() {
  it('returns HTTP status 200', function(done) {
    request('http://localhost:4000', function(err, res, body) {
        expect(res.statusCode).to.equal(200);
        done();
      });
  });
});