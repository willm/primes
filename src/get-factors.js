module.exports = function (numbers) {
    return numbers.map(n => numbers.map(j => n * j));
}
