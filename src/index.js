const generatePrimes = require('./generate-primes');
const getFactors = require('./get-factors');
const table = require('./templates/table.hbs');
const form = require('./templates/form.hbs');
const $ = require('jquery');
const div = $('div');

const formElement = $(form()).submit(displayTable);
const formDiv = $('#form');
formDiv.append(formElement)

function displayTable (evt) {
    const requestedNumber = Number($("#number").val());
    const primes = generatePrimes(requestedNumber);
    const factors = getFactors(primes);
    $('#table').html($(table({primes, factors})));
    evt.preventDefault();
    return false;
}
