/*jshint esversion: 6 */

/**
 * Module for a very simple adding machine.
 *
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Returns the sum of the arguments passed.
 *
 * @param {...*} varArgs
 * @returns {Number} The sum of an arbitrary number of numbers.
 */

 function add(varArgs) {
   let sum = 0;
   for(let i in arguments){
     let arg = arguments[i];
     if(Array.isArray(arg)){
       arg.forEach(newArg => sum += add(newArg));
     } else if(typeof arg === 'string') {
       let nr = Number.parseFloat(arg.replace(',', '.'));
       if(isNaN(nr)) {
         throw new TypeError('Can\'t convert to nummmber');
       }
       sum += nr;
     } else if (typeof arg === 'number') {
       sum += arg;
     } else {
       throw new TypeError('Can\'t convert to number');
     }
   }
   return sum;
 }

exports.add = add;
