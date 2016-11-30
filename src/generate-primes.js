module.exports = (howMany) => {
    const max = Math.pow(howMany, 2) + 2;
    const firstPrime = 2;
    return getPrimes(howMany, getInitialSeries(max), [firstPrime]);
}

function markMultiples(x) {
    return function (possible) {
        if (possible.number % x === 0) {
            return {
                number: possible.number,
                marked: true
            };
        }
        return possible;
    }
}

function getPrimes(howMany, series, numbers) {
    if (numbers.length === howMany) {
        return numbers;
    }
    const markedSeries = series
        .map(markMultiples(numbers.slice(-1)[0]));
    return getPrimes(howMany, markedSeries, numbers.concat(
        markedSeries.find(x => !x.marked).number
    ));
}

function getInitialSeries(max) {
    return [{
        number: 2,
        marked: true
    }].concat(range(max).slice(3)
    .map(x => ({
        number: x,
        marked: false
    })));
}

function range (n) {
    return Array.from(new Array(n)).map((x,i) => i);
}
