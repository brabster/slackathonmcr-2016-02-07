'use strict';

var chai = require('chai');

var normalizeUrl = require('../src/normalize-url');

describe('URL normalizer', function() {

  it('accepts valid HTTP url', function() {
    var url = 'http://google.com/something?foo=bar';
    chai.expect(normalizeUrl(url)).to.eql(url);
  });

  it('accepts valid HTTPS url', function() {
    var url = 'https://google.com/something?foo=bar';
    chai.expect(normalizeUrl(url)).to.eql(url);
  });

  it('adds HTTP if no protocol provided', function() {
    var url = 'google.com';
    chai.expect(normalizeUrl(url)).to.eql('http://' + url +'/');
  });

});
