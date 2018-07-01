/*jshint esversion: 6 */

**
 * Module for lego part 1.
 *
 * @module src/lego-1-factory-pattern
 * @author Johan Leitet
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

let createLegoBrick = function(x = 2, y = 4, color = 'red') {
  function toString() {
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

  function render() {
    console.log(this.toString());
  }

  return { x: x, y: y, color: color, toString: toString, render: render };

};

// Exports
exports.createLegoBrick = createLegoBrick;
