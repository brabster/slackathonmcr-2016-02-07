'use strict';

import http from 'http';

exports.handler = function(event, ctx) {
  return http.get(event.text, function(err, res) {
    if (err) return ctx.fail('Boom! Didn\'t work, sorry');
    console.log(res);
    return ctx.succeed(res.statusCode);
  });
};
