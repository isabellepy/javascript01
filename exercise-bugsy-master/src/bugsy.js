/*jshint esversion: 6 */

/**
 * Bugsy module.
 *
 * @module src/bugsy
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const mostWanted = require('./MostWanted.js');

/**
 * Returns the first gangster whoes full name matching the initials.
 *
 * @param {string} initials The initials of the full name to be found.
 * @returns {string} The first full name found matching the initials.
 */
function getGangster (initials) {
  let names = mostWanted.getNames();
  let theSuspect = 'No suspect found!';
  let name;
  let initialsOfTheName;

  name = names.next().value;
  while (name) {
    initialsOfTheName = mostWanted.getInitials(name);
    if (initials === initialsOfTheName) {
      theSuspect = name;
      break;
    }
    name = names.next().value;
  }

  return theSuspect;
}

exports.getGangster = getGangster;
