# hex-color-regex [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> The best regular expression (regex) for matching hex color values from string.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coverage-img]][coverage-url] [![dependency status][david-img]][david-url]


## Install
```
npm i hex-color-regex --save
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var hexColorRegex = require('hex-color-regex')

hexColorRegex().test('#f3f}') //=> true
hexColorRegex({strict: true}).test('#f3f}') //=> false

hexColorRegex().test('foo #f3f bar') //=> true
hexColorRegex({strict: true}).test('foo #f3f bar') //=> false

hexColorRegex().test('#a54f2c}') //=> true
hexColorRegex({strict: true}).test('#a54f2c}') //=> false

hexColorRegex().test('foo #a54f2c bar') //=> true
hexColorRegex({strict: true}).test('foo #a54f2c bar') //=> false

hexColorRegex().test('#ffff') //=> false
hexColorRegex().test('ffff') //=> false

hexColorRegex().test('#fff') //=> true
hexColorRegex().test('fff') //=> false

hexColorRegex().test('#4g1') //=> false
hexColorRegex().test('4g1') //=> false
hexColorRegex().test('#zY1') //=> false
hexColorRegex().test('zY1') //=> false
hexColorRegex().test('#7f68ZY') //=> false
hexColorRegex().test('7f68ZY') //=> false
hexColorRegex().test('ffffff') //=> false

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


## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/regexps/hex-color-regex/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/hex-color-regex
[npmjs-img]: https://img.shields.io/npm/v/hex-color-regex.svg?label=hex-color-regex

[license-url]: https://github.com/regexps/hex-color-regex/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/regexps/hex-color-regex
[codeclimate-img]: https://img.shields.io/codeclimate/github/regexps/hex-color-regex.svg

[coverage-url]: https://codeclimate.com/github/regexps/hex-color-regex
[coverage-img]: https://img.shields.io/codeclimate/coverage/github/regexps/hex-color-regex.svg

[travis-url]: https://travis-ci.org/regexps/hex-color-regex
[travis-img]: https://img.shields.io/travis/regexps/hex-color-regex.svg

[coveralls-url]: https://coveralls.io/r/regexps/hex-color-regex
[coveralls-img]: https://img.shields.io/coveralls/regexps/hex-color-regex.svg

[david-url]: https://david-dm.org/regexps/hex-color-regex
[david-img]: https://img.shields.io/david/regexps/hex-color-regex.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg
