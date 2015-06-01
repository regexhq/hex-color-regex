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
    '#111111',
    // '#123fff}' // should pass
  ],
  fail: [
    'afebe3',
    'AFEBE3',
    '3cb371',
    'ABC371',
    '556b2f',
    '5A6B2F',
    '708090',
    '7b68ee',
    '7B68EE',
    'eeeeee',
    'ffffff',
    '111111',
    'afebef',
    '3c537f',
    '556B2f',
    '708135',
    'EE3EF1',
    '7f68ZY',
    '#7f68ZY',
    '#7z68ZY',
    '#GR68',
    '#Z68',
    '#666EFR'
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
    // '#f3f}', should pass
    '#111'
  ],
  fail: [
    'fff',
    '4zy',
    '4g1',
    '111',
    'Ge3',
    'zY1',
    '#ggg',
    '#4zy',
    '#4g1',
    '#Ge3',
    '#zY1'
  ]
};

var urlTest = 'http://www.example.com/index.html#f06d06';

sixDigits.pass.forEach(function(hex) {
  mukla('should be `true` when `'+ hex +'` value').strictEqual(regex().test(hex), true);
});
sixDigits.fail.forEach(function(hex) {
  mukla('should be `false` when `'+ hex +'` value').strictEqual(regex().test(hex), false);
});

threeDigits.pass.forEach(function(hex) {
  mukla('should be `true` when `'+ hex +'` hex value').strictEqual(regex().test(hex), true);
});
threeDigits.fail.forEach(function(hex) {
  mukla('should be `false` when `'+ hex +'` hex value').strictEqual(regex().test(hex), false);
});
mukla('should be `false` when `' + urlTest + '` is passed in with strict mode').strictEqual(regex({strict:true}).test(urlTest), false);
mukla('should be `true` when `' + urlTest + '` is passed in without strict mode').strictEqual(regex().test(urlTest), true);


