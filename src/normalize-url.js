'use strict';

var url = require('url'),
  httpProto = /^https?:$/;

var norm = function(text) {
  var parsed = url.parse(text);

  if (!parsed.protocol) return norm('http://' + text);

  if (!httpProto.test(parsed.protocol)) throw new Error('Protocol \'' + parsed.protocol + '\' not recognised');

  if (!parsed.host) throw new Error('Failed to parse a URL from \'' + text + '\'');

  return url.format(parsed);
};


module.exports = norm;
