'use strict';

var http = require('http'),
  https = require('https'),
  url = require('url'),
  normalizeUrl = require('./normalize-url'),
  buildSlackResponse = require('./build-response');

module.exports = function(text, cb) {
  try {
    var normalizedUrl = normalizeUrl(text),
      httpLib = /^https:/.test(normalizedUrl) && https || http;
    return httpLib['get'](normalizeUrl(text), function(res) {
      return cb(undefined, buildSlackResponse(text, res));
    });
  } catch (e) {
    return cb(e);
  }
};
