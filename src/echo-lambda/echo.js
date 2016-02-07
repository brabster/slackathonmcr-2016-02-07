'use strict';

exports.handler = function(event, ctx) {
  console.log(JSON.stringify(event));
  context.succeed('All done here');
};
