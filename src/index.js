'use strict';

var httpPing = require('./http-ping');

exports.handler = function(event, ctx) {
  return httpPing(event.text, function(err, res) {
    if (err) return ctx.fail(err);
    return ctx.succeed(res);
  });
};
