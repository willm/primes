'use strict';

var tape = require('tape');
var generatePrimes = require('../src/generate-primes');
require('babel-polyfill');

tape('1 gets 1 prime', assert => {
    const primes = generatePrimes(1);
    assert.deepEqual(primes, [2]);
    assert.end();
});

tape('2 gets 2 primes', assert => {
    const primes = generatePrimes(2);
    assert.deepEqual(primes, [2, 3]);
    assert.end();
});

function isPrime(x) {
    for(let i = x - 1; i >= 2; i--) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}

tape('5 gets 5 primes', assert => {
    const primes = generatePrimes(5);
    assert.equal(primes.length, 5, 'got 5 primes');
    assert.equal(
        true, primes.every(isPrime), 'all numbers are prime');
    assert.end();
});
