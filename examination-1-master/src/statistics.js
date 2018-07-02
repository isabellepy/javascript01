/*jshint esversion: 6 */

/**
 * Module for obtaining descriptive information about a set of data.
 *
 * @author TODO: Write your name here.
 * @version 1.1.0
 */

'use strict'

/**
 * Returns the descriptive information (maximum, mean, median, minimum,
 * mode, range and standard deviation) from a set of numbers.
 *
 * @param {number[]} numbers The set of data to be analyzed.
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {{maximum: number, mean: number, median: number, minimum: number, mode: number[], range: number, standardDeviation: number}}
 */
 function descriptiveStatistics(source) {
   if(!Array.isArray(source)){
     throw new TypeError('The passed argument is not an array.');
   } else if (!source.length) {
     throw new Error('The passed array contains no elements.');
   } else if(source.some(isNaN)){
     throw new TypeError('The passed array contains not just numbers.');
   }
 }

 function maximum(numbers) {
   descriptiveStatistics(numbers);
   return Math.max.apply(null, numbers);
 }

 function mean(numbers) {
   descriptiveStatistics(numbers);
   return numbers.reduce((a, b) => a + b) / numbers.length;
 }

 function standardDeviation(numbers) {
   descriptiveStatistics(numbers);
   let theMean = mean(numbers);
   let sqDiff = numbers.map((number) => {let diff = number - theMean; let sq = diff * diff; return sq;});
   let theMeanSqDiff = mean(sqDiff);
   let result = Math.sqrt(theMeanSqDiff);
   return result;
 }

 function minimum(numbers){
   descriptiveStatistics(numbers);
   return Math.min.apply(null, numbers);
 }

 function mode(numbers){
   descriptiveStatistics(numbers);
   let modes = [];
   let count = [];
   let number;
   let maxIndex = 0;

   for(let i = 0; i < numbers.length; i++){
     number = numbers[i];
     count[number] = (count[number] || 0) + 1;
     if(count[number] > maxIndex){
       maxIndex = count[number];
     }
   }

   for(let i in count) {
     if (count.hasOwnProperty(i)){
       if(count[i] === maxIndex) {
         modes.push(Number(i));
       }
     }
   }

   return modes;
 }

 function range(numbers) {
   descriptiveStatistics(numbers);
   numbers.sort((a, b) => b - a);
   return numbers[0] - numbers[numbers.length-1];
 }

 function median(numbers){
   descriptiveStatistics(numbers);
   numbers.sort((a, b) => a - b);
   let half = Math.floor(numbers.length/2);

   if(numbers.length % 2){
     return numbers[half];
   } else {
     return (numbers[half-1] + numbers[half])/2;
   }
 }


// Exports
exports.descriptiveStatistics = descriptiveStatistics;
exports.maximum = maximum;
exports.mean = mean;
exports.median = median;
exports.minimum = minimum;
exports.mode = mode;
exports.range = range;
exports.standardDeviation = standardDeviation;
