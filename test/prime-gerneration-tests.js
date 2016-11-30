'use strict';

var tape = require('tape');
var generatePrimes = require('../src/generate-primes');
require('babel-polyfill');

tape('0 gets no primes', function(assert) {
    var primes = generatePrimes(0);
    assert.deepEqual(primes, []);
    assert.end();
});

tape('1 gets 1 prime', assert => {
    const primes = generatePrimes(1);
    assert.deepEqual(primes, [2]);
    assert.end();
});
