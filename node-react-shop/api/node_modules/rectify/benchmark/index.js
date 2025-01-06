/* globals suite, set, bench */
'use strict';

var rectify = require('..');

suite('rectify', function() {

  set('iterations', 1000);

  bench('rectify', function() {
    rectify('“Who’s on first?”');
  });

});
