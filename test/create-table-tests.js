const test = require('tape');
const createTable = require('../src/create-table');
const $ = require('jquery');

test('creates a table with the provided data', assert => {
    const table = createTable({
        primes: [2,3],
        factors: [[2, 4, 6], [3, 6, 9]]
    });

    const rows = $(table).find('tr');
    assert.equal(rows.length, 3);
    const headerRow = Array.from($(rows[0]).find('th'));
    assert.equal(headerRow.length, 3);
    console.log(headerRow);
    assert.deepEqual(
        headerRow.map(x => $(x).html()), ['', '2', '3']
    );
    checkRow(assert, rows[1], ['2', '4', '6']);
    checkRow(assert, rows[2], ['3', '6', '9']);
    assert.end();
});

function checkRow(assert, row, expected) {
    const cells = Array.from($(row).find('td'));
    assert.deepEqual(
        cells.map(x => $(x).html()), expected
    );
}
