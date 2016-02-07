'use strict';

exports.handler = function(event, ctx) {
  console.log(JSON.stringify(event));
  ctx.succeed('All done here');
};
