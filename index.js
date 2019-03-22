"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
/**
 * Returns a new object with partial update
 */
exports.withObjectUpdated = function (obj, update) {
    return __assign({}, obj, update);
};
/**
 * Returns a new array with one item updated
 */
exports.withItemUpdated = function (list, key, value, update) {
    return list.map(function (i) { return (i[key] === value ? exports.withObjectUpdated(i, update) : i); });
};
/**
 * Returns a new array with one item updated
 */
exports.withItemUpdatedCallback = function (list, key, value, update) {
    return list.map(function (i) { return (i[key] === value ? update(i) : i); });
};
/**
 * Returns a new array with one item added
 */
exports.withItemAdded = function (list, item) {
    return (list || []).concat([item]);
};
/**
 * Returns a new array with one item removed
 */
exports.withItemRemoved = function (list, key, value) {
    return list.filter(function (i) { return i[key] !== value; });
};
/**
 * Returns a new array with one item removed
 */
exports.withSingleItemRemoved = function (list, value) {
    return list.filter(function (i) { return i !== value; });
};
