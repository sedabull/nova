//helpers.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.eq = eq;
exports.ne = ne;
exports.lt = lt;
exports.gt = gt;
exports.le = le;
exports.ge = ge;
exports.sq = sq;
exports.dist = dist;
var epsilon = .1;

function eq(a, b) {
    return Math.abs(a - b) <= epsilon;
}

//end eq

function ne(a, b) {
    return !eq(a, b);
}

//end ne

function lt(a, b) {
    return !eq(a, b) && a < b;
}

//end lt

function gt(a, b) {
    return !eq(a, b) && a > b;
}

//end gt

function le(a, b) {
    return eq(a, b) || a < b;
}

//end le

function ge(a, b) {
    return eq(a, b) || a > b;
}

//end ge

function sq(n) {
    return n * n;
}

//end sq

function dist(pt1, pt2) {
    return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
}

//end dist

var PI = Math.PI;
var cos = Math.cos;
var sin = Math.sin;
var sqrt = Math.sqrt;
var atan2 = Math.atan2;

exports.PI = PI;
exports.cos = cos;
exports.sin = sin;
exports.sqrt = sqrt;
exports.atan2 = atan2;