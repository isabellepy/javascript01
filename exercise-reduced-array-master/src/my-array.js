/*jshint esversion: 6 */

/**
 * my-array module
 *
 * @module src/my-array
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Takes an array of numbers and returns the sum of all numbers in the array.
 *
 * @param {number[]} data An array with numbers
 * @returns {number} The total sum of the numbers in the array.
*/
function getSum(data) {
  if(!Array.isArray(data)){
    throw new TypeError('Argument must be an array');
  }
  return data.reduce((sum, elem) => sum + elem);
}

exports.getSum = getSum;
