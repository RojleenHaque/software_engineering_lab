/* globals describe, it, expect */
'use strict';

var rectify = require('..');

describe('rectify(str)', function() {

  it('unsmartens punctuation marks', function() {
    expect(rectify('“Who’s on first?”')).toBe('"Who\'s on first?"');
    expect(rectify('‘')).toBe('\'');
    expect(rectify('’')).toBe('\'');
    expect(rectify('“')).toBe('"');
    expect(rectify('”')).toBe('"');
    expect(rectify('–')).toBe('--');
    expect(rectify('—')).toBe('---');
    expect(rectify('…')).toBe('...');
  });

  it('returns `str` unmodified', function() {
    expect(rectify('')).toBe('');
    expect(rectify('foo')).toBe('foo');
  });

});
