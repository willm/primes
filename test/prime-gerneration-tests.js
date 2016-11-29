'use strict';

var tape = require('tape');
var generatePrimes = require('../src/generate-primes');

tape('0 gets no primes', function(assert) {
    var primes = generatePrimes(0);
    assert.deepEqual(primes, []);
    assert.end();
});
