'use strict';
/**
 * hasVowels method test if a string contains vowels
 * @return {boolean} true if there are vowels and false otherwise
 */
String.prototype.hasVowels = function () {
  return /[aeiou]/i.test(this);
};