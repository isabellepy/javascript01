/*jshint esversion: 6 */

/**
 * Team module.
 *
 * @module src/team
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

  /**
   *  Sorts the team objects of an array in place and returns the array. The team
   *  objects is sorted by descending points.
   *
   * @param {Object[]} teams An unordered array of team objects.
   * @returns {Object[]} An ordered array of team objects.
   */
function sortByPoints(teams) {
  if(!Array.isArray(teams)){
    throw new TypeError('You must enter an array');
  }
  let copiedArray = teams.slice();
  copiedArray.sort(function(a, b){
    return a.points - b.points;
  });
  return copiedArray.reverse();
}

exports.sortByPoints = sortByPoints;
