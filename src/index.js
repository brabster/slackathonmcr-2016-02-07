'use strict';

var httpPing = require('./http-ping');

exports.handler = function(event, ctx) {
  return httpPing(event.text, function(err, res) {
    if (err) return ctx.succeed({
      response_type: 'in_channel',
      color: 'danger',
      text: 'Unable to get ' + event.text + ', error ' + err.name
    });
    return ctx.succeed(res);
  });
};
