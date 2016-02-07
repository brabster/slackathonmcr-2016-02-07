'use strict';

var buildStatusBlock = function(res) {
  return {
    color: res.statusCode < 400 && 'good' || res.statusCode < 500 && 'warning' || 'danger',
    text: res.statusCode + (res.statusMessage && ' (' + res.statusMessage + ')' || '')
  }
};

var buildHeadersBlock = function(res) {
  return {
    title: 'Response Headers',
    fields: Object.keys(res.headers).map(function(k) {
      return {
        title: k,
        value: res.headers[k],
        short: true
      }
    })
  }
};


module.exports = function(url, res) {
  return {
    title: 'HTTP code',
    text: 'Pinged <' + url + '|' + url + '>',
    attachments: [
      buildStatusBlock(res),
      buildHeadersBlock(res)
    ]
  }
};
