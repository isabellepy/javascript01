/*jshint esversion: 6 */

/**
 * Module for lego part 4.
 *
 * @module src/lego-4-class
 * @author Johan Leitet
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Represents a lego brick.
 */
class LegoBrick {
  constructor (x = 2, y = 4, color = 'red') {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  toString () {
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
  }
  
  render () {
    console.log(this.toString());
  }
}

// Exports
module.exports = LegoBrick;
