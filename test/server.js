/**
 * Created by Luiz Eduardo de Christo
 * May 30th, 2017
 */

request = require('supertest');
express = require('express');

app = require('../server');

describe('GET /', function() {
  it('respond with http 200', function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });
});