/**
 * hex-color-regex <https://github.com/regexps/hex-color-regex>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var mukla = require('mukla');
var hexColorRegex = require('./index');

mukla('should be true when 6-digit hex value').strictEqual(hexColorRegex().test('#afefe3'), true);
