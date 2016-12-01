module.exports = function (numbers) {
    return numbers.map(n => [n].concat(numbers.map(j => n * j)));
}
