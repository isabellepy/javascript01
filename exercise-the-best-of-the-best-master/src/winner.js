/*jshint esversion: 6 */

/**
 * Winner module.
 *
 * @module src/winner
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Analyze the array with names and returns an object where the frequency of the name is showing.
 *
 * @param {string[]} source
 * @returns {Object.<string, number>} - The object as example: {mats: 1, john: 3}
 */
 function getFrequenciesOfNames(source) {
   if(!Array.isArray(source)){
     throw new TypeError('The argument passed must be an array of strings.');
   }

   for (let i of source){
     if(typeof(source[i]) === 'string'){
       throw new TypeError('The argument passed must be an array of strings.');
     }
   }

   let arr = [];
   let obj = {};
   for (var i = 0; i < source.length; i++) {
     arr.push(source[i].toLowerCase());
     if(obj.hasOwnProperty(arr[i])){
       obj[arr[i]] += 1;
     } else {
       obj[arr[i]] = 1;
     }
   }

   return obj;
 }

/**
 * Takes an object with names and values and returns the name(s) with the highest count.
 *
 * @param {Object.<string, number>} obj
 * @returns {string[]}
 */
 function getMostFrequentNames(obj) {
   let size = 0;
   let x = Object.values(obj).reduce((sum, total) => {return sum + total;}, 0);

   for(let i in obj) {
     if(obj.hasOwnProperty(i)){
       size++;
     }
   }

   let temp = [];
   let xy = x / size;

   for(let i in obj){
     if(obj[i] >= xy){
       temp.push(i);
     }
   }
     return temp;
   }

/**
 * Sorts an array with strings in ascending order.
 *
 * @param {string[]} source
 * @returns {string[]}
 */
 function sortNamesAscending(source) {
   return source.sort();
 }

/**
 * Analyze the array and returns an array with the name (in lowercase, ascending order) that is most
 * frequent.
 *
 * @param {string[]} source An array with all the winners.
 * @returns {string[]} An array with the most frequent winners.
 */
function getNamesOfWinners(source) {
  // ---------------------------------------
  // Do not change the code in this function!
  // ---------------------------------------
  let frequencies
  let names

  frequencies = getFrequenciesOfNames(source);
  names = getMostFrequentNames(frequencies);

  return sortNamesAscending(names);
}

// Exports
exports.getFrequenciesOfNames = getFrequenciesOfNames;
exports.getMostFrequentNames = getMostFrequentNames;
exports.sortNamesAscending = sortNamesAscending;
exports.getNamesOfWinners = getNamesOfWinners;
