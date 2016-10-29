'use strict';
/**
 * hasVowels method test if a string contains vowels
 * @return {boolean} true if there are vowels and false otherwise
 */
String.prototype.hasVowels = function () {
  return /[aeiou]/i.test(this);
};

/**
 * toupper method converts all characters to their upper case
 * @return {string}, a string with upper case characters
 */
String.prototype.toUpper = function() {
  return this.replace(/[a-z]/g, (found) => {
    //makes use of ascii code
    return String.fromCharCode(found.charCodeAt(0) - 32);
  });
};

/**
 * toLower method converts all characters to their lower case
 * @return {string}, a string with lower case characters
 */
String.prototype.toLower = function() {
  return this.replace(/[A-Z]/g, (found) => {
    //makes use of ascii code
    return String.fromCharCode(found.charCodeAt(0) + 32);
  });
};

/**
 * ucFirst method converts the first character to upper case
 * @return {string}, a string with it's initial character in upper case'
 */
String.prototype.ucFirst = function() {
  return this.replace(this.charAt(0), this.charAt(0).toUpper());
}

String.prototype.isQuestion = function() {
  return /\?$/.test(this) ? true : false;
};