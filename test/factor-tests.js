const test = require('tape');
const getFactors = require('../src/get-factors');

test('gets factors for 2 numbers', assert => {
    const factors = getFactors([2, 3]);
    assert.deepEqual(factors, [[2, 4, 6], [3, 6, 9]]);
    assert.end();
});
