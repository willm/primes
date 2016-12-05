'use strict';

var test = require('tape');
var generatePrimes = require('../src/generate-primes');
require('babel-polyfill');

test('1 gets 1 prime', assert => {
    const primes = generatePrimes(1);
    assert.deepEqual(primes, [2], 'found the right primes');
    assert.end();
});

test('2 gets 2 primes', assert => {
    const primes = generatePrimes(2);
    assert.deepEqual(primes, [2, 3], 'found the right primes');
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

function testManyPrimes (amount) {
    test(`can get ${amount} primes`, assert => {
        const startTime = Date.now();
        const primes = generatePrimes(amount);
        const endTime = Date.now();
        const timeTaken = endTime - startTime;
        assert.equal(timeTaken < 5000, true,
            `found ${amount} primes in less than 5 seconds: ${timeTaken}ms`);
        assert.end();
    });

}

test('5 gets 5 primes', assert => {
    const primes = generatePrimes(5);
    assert.equal(primes.length, 5, 'got 5 primes');
    assert.equal(
        true, primes.every(isPrime), 'all numbers are prime');
    assert.end();
});

testManyPrimes(500);
testManyPrimes(1000);
testManyPrimes(2000);
