/*jshint esversion: 6 */

/**
 * my-array module.
 *
 * @module src/my-array
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Returns the sum of all object's numbers.
 *
 * @param {Object[]} source - An array of objects to analyze.
 * @param {number} source[].nr - The number.
 * @returns {number} - The total sum of the nr property of the objects in the provided array.
 */
 function getSum(source) {
   if(!Array.isArray(source)){
     throw new TypeError('Argument must be an array');
   }
   let obj = Object.values(source);
   return obj.reduce((sum, total) =>{ return sum + total.nr;}, 0);
 }

// Exports
exports.getSum = getSum;
