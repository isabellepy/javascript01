/*jshint esversion: 6 */

/**
 * Module for lego part 2.
 *
 * @module src/lego-2-constructor-pattern
 * @author Johan Leitet
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Creates a LegoBrick instance that represents a lego brick.
 *
 * @constructor
 * @param {number} [x = 2] - The horizontal number of knobs of the brick.
 * @param {number} [y = 4] - The vertical number of knobs of the brick.
 * @param {string} [color = 'red'] - The color of the brick ('blue', 'red', 'green', etc.)
 */
function LegoBrick(x = 2, y = 4, color = 'red') {
  this.x = x;
  this.y = y;
  this.color = color;

  this.toString = function toString() {
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
  };

  this.render = function render() {
    console.log(this.toString());
  };

}

// Exports
module.exports = LegoBrick;
