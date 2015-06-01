## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Regular expression (regex) for matching hex color values from string.

## Install
```
npm i --save hex-color-regex
npm test
```

## Parameters

### strict 

_default: false_

Tests also to see if the hex is the _only_ token passed in (adds ^ to the beginning and $ to the end.)

## Usage
> For more use-cases see the [tests](./test.js)

```js
var hexColorRegex = require('hex-color-regex');

hexColorRegex().test('#f3f}') //=> false, for now
hexColorRegex().test('#4g1') //=> false
hexColorRegex().test('#zY1') //=> false
hexColorRegex().test('111') //=> false
hexColorRegex().test('fff') //=> false
hexColorRegex().test('#7f68ZY') //=> false
hexColorRegex().test('#GR68') //=> false
hexColorRegex().test('#abcd') //=> false
hexColorRegex().test('abcd') //=> false
hexColorRegex().test('708135') //=> false
hexColorRegex().test('ffffff') //=> false
hexColorRegex().test('afebef') //=> false
hexColorRegex().test('#113141}') //=> false, for now
hexColorRegex({strict:true}).test('http://www.example.com/index.html#f06d06}') //=> false

hexColorRegex().test('#afebe3') //=> true
hexColorRegex().test('#AFEBE3') //=> true
hexColorRegex().test('#3cb371') //=> true
hexColorRegex().test('#3CB371') //=> true
hexColorRegex().test('#556b2f') //=> true
hexColorRegex().test('#556B2F') //=> true
hexColorRegex().test('#708090') //=> true
hexColorRegex().test('#7b68ee') //=> true
hexColorRegex().test('#7B68EE') //=> true
hexColorRegex().test('#eeeeee') //=> true
hexColorRegex().test('#ffffff') //=> true
hexColorRegex().test('#111111') //=> true
hexColorRegex().test('#afe') //=> true
hexColorRegex().test('#AF3') //=> true
hexColorRegex().test('#3cb') //=> true
hexColorRegex().test('#3CB') //=> true
hexColorRegex().test('#b2f') //=> true
hexColorRegex().test('#5B2') //=> true
hexColorRegex().test('#708') //=> true
hexColorRegex().test('#68e') //=> true
hexColorRegex().test('#7AF') //=> true
hexColorRegex().test('#777') //=> true
hexColorRegex().test('#FFF') //=> true
hexColorRegex().test('#fff') //=> true
```


## Matching groups

```js
hexColorRegex().exec('#a1b2c3');
//=> ['#a1b2c3', 'a1b2c3', index: 0, input: '#a1b2c3']
```

- `[0]` with the hash sign (`#afafaf`)
- `[1]` without hash sign (`afafaf`)


## Author
**Charlike Mike Reagent**
+ [gratipay/tunnckoCore][author-gratipay]
+ [twitter/tunnckoCore][author-twitter]
+ [github/tunnckoCore][author-github]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014-2015 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/hex-color-regex
[npmjs-img]: https://img.shields.io/npm/v/hex-color-regex.svg?style=flat&label=hex-color-regex

[coveralls-url]: https://coveralls.io/r/regexps/hex-color-regex?branch=master
[coveralls-img]: https://img.shields.io/coveralls/regexps/hex-color-regex.svg?style=flat

[license-url]: https://github.com/regexps/hex-color-regex/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/regexps/hex-color-regex
[travis-img]: https://img.shields.io/travis/regexps/hex-color-regex.svg?style=flat

[daviddm-url]: https://david-dm.org/regexps/hex-color-regex
[daviddm-img]: https://img.shields.io/david/dev/regexps/hex-color-regex.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/regexps/hex-color-regex/graphs/contributors

***

_Powered and automated by [kdf](https://github.com/tunnckoCore), February 3, 2015_