# Rectify.js [![npm Version](http://img.shields.io/npm/v/rectify.svg?style=flat)](https://www.npmjs.org/package/rectify) [![Build Status](https://img.shields.io/travis/yuanqing/rectify.svg?style=flat)](https://travis-ci.org/yuanqing/rectify) [![Coverage Status](https://img.shields.io/coveralls/yuanqing/rectify.svg?style=flat)](https://coveralls.io/r/yuanqing/rectify)

> Unsmarten your quotes, dashes, and ellipses.

## Usage

```js
rectify('“Who’s on first?”'); //=> '"Who\'s on first?"'
```

The mapping from smart to raw is as follows:

```
‘ => '
’ => '
“ => "
” => "
– => --
— => ---
… => ...
```

## API

### rectify(str)

Returns the `str` with quotes, dashes, and ellipses replaced with their raw equivalents.

## Installation

Install via [npm](https://www.npmjs.org/package/rectify):

```bash
$ npm i --save rectify
```

## License

[MIT license](https://github.com/yuanqing/rectify/blob/master/LICENSE)
