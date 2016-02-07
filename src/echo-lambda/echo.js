'use strict';

var http = require('http');

var buildResponse = function(url, statusCode) {
  return {
    "title": "HTTP code",
    "text": "HTTP for: <" + url + "|" + url + ">",
    "attachments": [
      {
        "color": "good",
        "fields": [
          {
            "title": "HTTP status code",
            "value": statusCode + "",
            "short": false
          }
        ]
      },
      {
        "color": "danger",
        "fields": [
          {
            "title": "TTFB",
            "value": "200",
            "short": false
          }
        ]
      }
    ]
  }

};

exports.handler = function(event, ctx) {
  return http.get(event.text, function(res) {
    return ctx.succeed(buildResponse(event.text, res.statusCode));
  });
};
