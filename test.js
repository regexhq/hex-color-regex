/**
 * hex-color-regex <https://github.com/regexps/hex-color-regex>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var mukla = require('mukla');
var regex = require('./index');

var sixDigits = {
  pass: [
    '#afebe3',
    '#AFEBE3',
    '#3cb371',
    '#3CB371',
    '#556b2f',
    '#556B2F',
    '#708090',
    '#7b68ee',
    '#7B68EE',
    '#eeeeee',
    '#ffffff',
    '#111111'
  ],
  fail: [
    '#afebe',
    '#3cb37',
    '556B2f',
    '708135',
    '#ZE3EF1',
    '#7g68ZY'
  ]
};
var threeDigits = {
  pass: [
    '#afe',
    '#AF3',
    '#3cb',
    '#3CB',
    '#b2f',
    '#5B2',
    '#708',
    '#68e',
    '#7AF',
    '#777',
    '#FFF',
    '#fff',
    '#111'
  ],
  fail: [
    '#afg',
    '#4zy',
    '4g1',
    '111',
    '#Ge3',
    '#zY1'
  ]
};

sixDigits.pass.forEach(function(hex) {
  mukla('should be `true` when `'+ hex +'` hex value').strictEqual(regex().test(hex), true);
});
sixDigits.fail.forEach(function(hex) {
  mukla('should be `false` when `'+ hex +'` hex value').strictEqual(regex().test(hex), false);
});

threeDigits.pass.forEach(function(hex) {
  mukla('should be `true` when `'+ hex +'` hex value').strictEqual(regex().test(hex), true);
});
threeDigits.fail.forEach(function(hex) {
  mukla('should be `false` when `'+ hex +'` hex value').strictEqual(regex().test(hex), false);
});
