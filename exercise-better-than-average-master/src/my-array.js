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
 * Returns the name of the students whose points is greater than,
 * or equal to, the average of the points.

 * @param {object[]} students
 * @returns {string[]}
 */
function filterBetterThanAverage(students) {
  if(!Array.isArray(students)){
    throw new TypeError("Argument must be an array");
  }
  let average = students.reduce(function(sum, people){
    return sum + people.points;
  }, 0) / students.length;

  return students.filter(p => p.points >= average).map(p => p.name);
}

exports.filterBetterThanAverage = filterBetterThanAverage;
