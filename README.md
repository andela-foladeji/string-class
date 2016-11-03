[![Build Status](https://travis-ci.org/andela-foladeji/string-class.svg)](https://travis-ci.org/andela-foladeji/string-class)
[![Coverage Status](https://coveralls.io/repos/github/andela-foladeji/string-class/badge.svg)](https://coveralls.io/repos/github/andela-foladeji/string-class/badge.svg)
[![Code Climate](https://codeclimate.com/github/andela-foladeji/string-class/badges/gpa.svg)](https://codeclimate.com/github/andela-foladeji/string-class)

# String Class
An extension to javascript String's class for more string manipulations.
Below are the methods that were added to string's prototype method

- `hasVowels()` Returns true if the string contains vowels
```
  'apple'.hasVowels(); //true
  'bcd'.hasVowels(); //false
```
- `toUpper()` Returns the String in question but with all characters in upper cases as applicable
```
  'javAsCRipt'.toUpper(); //JAVASCRIPT
```
- `toLower()` Returns the String in question but with all characters in lower cases as applicable
```
  `UPPER cAse`.toLower(); //upper case
```
- `ucFirst()` Returns the String in question but changes the First Character to an Upper case
```
  'first'.ucFirst(); //First
```
- `isQuestion()` Return true if the string is a question (ending with a question mark)
```
  'Is it true?'.isQuestion(); //true
  'What!'.isQuestion(); //false
```
- `words()` Returns a list of the words in the string, as an Array
```
  'Group    of    words'.words(); // ['Group', 'of', 'words']
```
- `wordCount()` Returns the number of words in the string
```
  'Group    of    words'.wordCount(); // 3
```
- `toCurrency()` Returns a currency representation of the String
```
  '11111.11'.toCurrency(); // 11,111.11
```
- `fromCurrency()` Returns a number representation of the Currency String
```
  '11,111.11'.fromCurrency(); // 11111.11
```
- `inverseCase()` Returns each letter in the string as an inverse of its current case
```
  'Mr. Ben'.inverseCase(); // mR. bEN
```
- `alternatingCase()` Returns the letters in alternating cases. It starts with a lower case
```
  'Onomatopoeia'.alternatingCase(); // oNoMaToPoEiA
```
- `getMiddle()` Returns the character(s) in the middle of the string
```
  'middle'.getMiddle(); // dd
  'mid'.getMiddle(); // i
```
- `numberWords()` Returns the numbers in words
```
  '325'.numberWords(); // three two five
```
- `isDigit()` Returns true if the string is a digit(one number)
```
  '3'.isDigit(); // true
  '53434'.isDigit(); // false
```
- `doubleCheck()` Returns true if a string contains double characters(including whitespace character)
```
  'woow'.doubleCheck(); // true
  'no'.doubleCheck(); // false
```

## How to use
The js file that extends the string methods is src/string-class.js

1.  Clone the repository `git clone https://github.com/andela-foladeji/string-class.git`
2.  Move into the repository directory `cd string-class`
3.  Run npm install to install all the dependencies. The application is build on [Nodejs](nodejs.org) `npm install`

    ### Dependencies
    - mocha (test)
    - istanbul (test coverage)
5.  To run tests, you can run the command below `npm test`
6.  You can move the string-class.js file into any project folder where you'll like to use it
7.  Feel free to use and also don't forget to contribute