'use strict';

var tape = require('tape');

function generatePrimes(howMany) {
    return [];
}

tape('0 gets no primes', function(assert) {
    var primes = generatePrimes(0);
    assert.deepEqual(primes, []);
    assert.end();
});
