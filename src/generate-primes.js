module.exports = (howMany) => {
    const numbers = range(howMany + 2).slice(2);
    return numbers.slice(0, howMany);
}

function range (n) {
    return Array.from(new Array(n)).map((x,i) => i);
}
