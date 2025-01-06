'use strict';

var mapping = {
  '‘': '\'',
  '’': '\'',
  '“': '"',
  '”': '"',
  '–': '--',
  '—': '---',
  '…': '...'
};

var rectify = function(str) {

  str = str.split('');

  var i;
  var len = str.length;

  for (i = 0; i < len; ++i) {
    if (typeof mapping[str[i]] !== 'undefined') {
      str[i] = mapping[str[i]];
    }
  }

  return str.join('');

};

module.exports = exports = rectify;
