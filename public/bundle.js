(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var opertaions = require('./lib');

(function(a, b) {
    console.log(opertaions.sum(a, b));
    console.log(opertaions.sub(a, b));
    console.log(opertaions.mul(a, b));
    console.log(opertaions.div(a, b));
})(4, 4);
},{"./lib":2}],2:[function(require,module,exports){
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZW50cnkuanMiLCJzcmMvbGliLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIG9wZXJ0YWlvbnMgPSByZXF1aXJlKCcuL2xpYicpO1xuXG4oZnVuY3Rpb24oYSwgYikge1xuICAgIGNvbnNvbGUubG9nKG9wZXJ0YWlvbnMuc3VtKGEsIGIpKTtcbiAgICBjb25zb2xlLmxvZyhvcGVydGFpb25zLnN1YihhLCBiKSk7XG4gICAgY29uc29sZS5sb2cob3BlcnRhaW9ucy5tdWwoYSwgYikpO1xuICAgIGNvbnNvbGUubG9nKG9wZXJ0YWlvbnMuZGl2KGEsIGIpKTtcbn0pKDQsIDQpOyIsInZhciBzdW0gPSBmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGEgKyBiO1xufVxuXG52YXIgc3ViID0gZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBhIC0gYjtcbn1cblxudmFyIG11bCA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gYSAqIGI7XG59XG5cbnZhciBkaXYgPSBmdW5jdGlvbihhLCBiKSB7XG4gICAgaWYgKGIgPT09IDApXG4gICAgICAgIHRocm93ICdkaXZpc2lvbiBieSB6ZXJvJztcbiAgICByZXR1cm4gYSAvIGI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHN1bTogc3VtLFxuICAgIHN1Yjogc3ViLFxuICAgIG11bDogbXVsLFxuICAgIGRpdjogZGl2XG59OyJdfQ==
