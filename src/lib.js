var sum = function(a, b) {
    return a + b;
}

var sub = function(a, b) {
    return a - b;
}

var mul = function(a, b) {
    return a * b;
}

var div = function(a, b) {
    if (b === 0)
        throw 'division by zero';
    return a / b;
}

module.exports = {
    sum: sum,
    sub: sub,
    mul: mul,
    div: div
};