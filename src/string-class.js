'use strict';
/**
 * hasVowels method test if a string contains vowels
 * @return {boolean} true if there are vowels and false otherwise
 */
String.prototype.hasVowels = function () {
  return /[aeiou]/i.test(this);
};

String.prototype.toUpper = function() {
  return this.replace(/[a-z]/g, (found) => {
    //makes use of ascii code
    return String.fromCharCode(found.charCodeAt(0) - 32);
  });
};

String.prototype.toLower = function() {
  return this.replace(/[A-Z]/g, (found) => {
    //makes use of ascii code
    return String.fromCharCode(found.charCodeAt(0) + 32);
  });
};