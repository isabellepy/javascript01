/*jshint esversion: 6 */

/**
 * mf module.
 *
 * @module src/mf
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Returns the sum of two local variables.
 *
 * @returns {number} The result of an arithmetic operation.
 */
function add () {
  let a = 21;
  let b = '21';

  b = Number(b);

  return a + b;
}

/**
 * Returns a string combined of multiple local variables.
 *
 * @returns {string} The string 'I'm going to learn how to program in 9 weeks.'.
 */
function concat () {
  let message = `I'm going to learn how to program in`;
  let time = 9;
  let weeks = 'weeks.';

  return `${message} ${time} ${weeks}`;
}

/**
 * Returns the sum of two local variables, rounded to the nearest integer.
 *
 * @returns {number} The sum of two variables rounded to the nearest integer.
 */
function round () {
  let firstNumber = 12.24;
  let secondNumber = 29.27;

  return Math.round(firstNumber + secondNumber);
}

/**
 * Returns a string with the sequence of odd numbers from one up to the value of the parameter.
 *
 * @param {number} max An integer greater than zero.
 * @returns {string} A string with comma separated odd values.
 */
function getOddNumbers (max) {
  let numbers = "";
  for(let i = 0; i <= max; i++){
    if(i % 2) {
      numbers += (i) + ", ";
    }
  }
  numbers = numbers.slice(0, -2);
  return numbers;
}

/**
 * Returns a string with a greeting message according to the time of day.
 *
 * If hour is between 8 and 12 the message should be "Good morning!".
 * If hour is between 12 and 18 the message should be "Good afternoon!".
 * If hour is between 18 and 24 the message should be "Good evening!".
 * If hour is between 24 and 8 the message should be "Good night!".
 *
 * @returns {string} A greeting according to the time of day.
 */
function greetings () {
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let currentTime = hour + "" + minute
  let message = "";
  if(currentTime >= '0801' && currentTime <= '1200'){
    message = "Good morning!";
  } else if (currentTime >= '1201' && currentTime <= '1800'){
    message = "Good afternoon!";
  } else if (currentTime >= '1801' && currentTime <= '2400'){
    message = "Good evening!";
  } else {
    message = "Good night!";
  }
  return message;
}

/**
 * Returns a string where all hyphens (-) is replaced by a space.
 *
 * @param {string} str  The string being searched and replaced on.
 * @returns {string} - A new string with all matches of a hyphen replaced by a space.
 */
function replaceHyphensFor (str) {
  let newStr = str;
  for(let i = 0; i <= str.length; i++){
    newStr = newStr.replace('-', ' ');
  }
  // let newStr = str.replace(/-/g, ' ');
  return newStr;
}

/**
 * Returns a string where all hyphens (-) is replaced by a space.
 *
 * @param {string} str  The string being searched and replaced on.
 * @returns {string} - A new string with all matches of a hyphen replaced by a space.
 */
function replaceHyphensWhile (str) {
  let newStr = str;
  let i = 0;
  while(i <= newStr.length){
    i++;
    newStr = newStr.replace('-', ' ');
  }
  return newStr;
}

/**
 * Returns a string containing a few number sequences.
 *
 * @returns {string} - A string '11-12-13, 21-22-23, 31-32-33, 41-42-43, 51-52-53'.
 */
function getNumberSequence () {
  let result = '';
  for(let i = 10; i <= 50; i += 10){
    for(let j = 1; j <= 3; j++){
      if(j < 3){
      result += i + j + '-';
    } else {
      result += i + j + ', ';
      }
    }
  }
  result = result.slice(0, -2);
  return result;
}

exports.add = add;
exports.concat = concat;
exports.round = round;
exports.getOddNumbers = getOddNumbers;
exports.greetings = greetings;
exports.replaceHyphensFor = replaceHyphensFor;
exports.replaceHyphensWhile = replaceHyphensWhile;
exports.getNumberSequence = getNumberSequence;
