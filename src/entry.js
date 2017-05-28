var opertaions = require('./lib');

(function(a, b) {
    console.log(opertaions.sum(a, b));
    console.log(opertaions.sub(a, b));
    console.log(opertaions.mul(a, b));
    console.log(opertaions.div(a, b));
})(4, 4);