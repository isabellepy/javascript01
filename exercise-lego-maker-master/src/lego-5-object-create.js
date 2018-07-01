/*jshint esversion: 6 */

/**
 * Module for lego part 5.
 *
 * @module src/lego-5-object-create
 * @author Johan Leitet
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const LegoBrick = {
  toString: function () {
    let brick = '';
    let i;
    for(let j = 0; j < this.x; j++){
      for(i = 1; i <= this.y; i++){
        brick += '® ';
        if(i === this.y){
          brick = brick.slice(0, -1);
          brick += '\n';
        }
      }
    }
    brick = brick.slice(0, -1);
    return brick;
  },
  render: function () {
    console.log(this.toString());
  }
}

/**
 * Returns an object representing a lego brick.
 *
 * @param {number} [x = 2] - The horizontal number of knobs of the brick.
 * @param {number} [y = 4] - The vertical number of knobs of the brick.
 * @param {string} [color = 'red'] - Color of the brick ('blue', 'red', 'green', etc.).
 * @returns {object} obj - Object representing a brick.
 * @returns {number} obj.x - Horizontal number of horizontal nobs of the brick.
 * @returns {number} obj.y - Vertical number of vertical nobs of the brick.
 * @returns {string} obj.color - Color of the brick.
 * @returns {function} obj.toString - A function returning a string representing the object.
 * @returns {function} obj.render - A function rendering the object.
 */
let createLegoBrick = function (x = 2, y = 4, color = 'red') {
  return Object.create(LegoBrick, {
    'x': {
      value: x,
      writable: true,
      enumerable: true,
      configurable: true
    },
    'y': {
      value: y,
      writable: true,
      enumerable: true,
      configurable: true
    },
    'color': {
      value: color,
      writable: true,
      enumerable: true,
      configurable: true
    }
  });
}

// Exports
exports.createLegoBrick = createLegoBrick;
