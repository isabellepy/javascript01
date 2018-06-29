/*jshint esversion: 6 */

/**
 * Harshad module.
 *
 * @module src/harshad
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
* Returns true when the given number is a valid Harshad number.
*
* @param {number} number The given number.
* @returns {boolean}
*/
function isValid(number) {
  let len = number.toString();
  let sum = 0;
  for(let i = 0; i < len.length; i++){
    sum += parseInt(len[i]);
  }
  sum = number / sum;
    if(sum % 1 === 0){
      return true;
    } else {
      return false;
    }
}

/**
* Gets the next Harshad number after the given number.
*
* @param {number} number The given number.
* @returns {number}
*/
function getNext(number) {
  let nr = number;
  while(isValid(nr) === false){
    nr++;
  }
  return nr;
}

/**
* Returns a sequence of Harshad numbers, starting after a given number.
*
* @param {number} count The number of consecutive Harshad numbers to return.
* @param {number} [start = 0] The number after which the sequence should start; defaults to 0.
* @returns {number[]}
*/
function getSequence(count, start = 0) {
  let arr = [];
  let nr = start;
  for(let i = 0; i < count; i++){
    nr = getNext(nr);
    arr.push(nr);
    nr++;
  }
  return arr;
}

// Exports
exports.isValid = isValid;
exports.getNext = getNext;
exports.getSequence = getSequence;
