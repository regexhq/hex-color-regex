/**
 * hex-color-regex <https://github.com/regexps/hex-color-regex>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

module.exports = function hexColorRegex(config) {
  config = config || {};
  var regex = config.strict ? /^#([a-f0-9]{6}|[a-f0-9]{3})\b$/gi : /#([a-f0-9]{6}|[a-f0-9]{3})\b/gi
  return regex;
};
