module.exports = (howMany) => {
    // The algorithm generates primes up to a certain number,
    // so make sure this is a large number.
    const max = howMany * 10 + 2;
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
    let startAt;
    const nextPrime = markedSeries.find((x, i) => {
        if(!x.marked) {
            startAt = i - 1;
            return true;
        }
        return false;
    }).number;
    return getPrimes(howMany, markedSeries.slice(startAt), numbers.concat(
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
