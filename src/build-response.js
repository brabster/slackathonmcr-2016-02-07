'use strict';

module.exports = function(url, res) {
  return {
    title: 'HTTP code',
    text: 'HTTP for: <' + url + '|' + url + '>',
    attachments: [
      {
        color: 'good',
        fields: [
          {
            title: 'HTTP status code',
            value: res.statusCode + '',
            short: false
          }
        ]
      },
      {
        color: 'danger',
        fields: [
          {
            title: 'TTFB',
            value: '200',
            short: false
          }
        ]
      }
    ]
  }
};
