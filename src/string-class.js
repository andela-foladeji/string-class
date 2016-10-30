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

/**
 * isQuestion method checks if a string is a question by
 * checking if the last character is a question mark ?
 * @return {boolean}; true if the string is a question and false otherwise
 */
String.prototype.isQuestion = function() {
  return /\?$/.test(this.trimSpace()) ? true : false;
};

/**
 * trimSpace method removes the trailing and preceeding empty spaces in a string
 * @return {string}; trimmed string
 */
String.prototype.trimSpace = function() {
  return this.replace(/^\s+|\s+$/g, '');
};

/**
 * words method gets all the words in a string
 * @return {array}; an array of words in the string
 */
String.prototype.words = function() {
  const newValue = this.trimSpace().removeSpecialChars();
  if(newValue === '') {
    return [];
  }
  return newValue.split(/\s+/);
};

/**
 * removeSpecialChars method is used to replace non-alphanumeric characters
 * including _ that are alone and replaces it with empty space
 * @return {string}
 */
String.prototype.removeSpecialChars = function() {
  return this.replace(/[^\w\s]|_/g, '');
};

String.prototype.wordCount = function() {
  return this.words().length;
};

String.prototype.toCurrency = function() {
  var parts = this.split(/[.]/g),
      length = parts[0].length,
      newValue = '';
  var firstCommaPos = (length % 3 === 0) ? 3 : length % 3;
  for(let i = 0; i < length; i++) {
    if(firstCommaPos === i){
      newValue += ',';
      firstCommaPos += 3;
    }
    newValue += parts[0][i];
  }
  if(parts[1]) {
    return newValue+'.'+parts[1];
  }
  return newValue;
};

String.prototype.fromCurrency = function() {
  return this.replace(/,+/g, '');
};